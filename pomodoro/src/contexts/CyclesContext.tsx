import { ReactNode, createContext, useReducer, useState } from 'react'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startData: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  amountSeecondsPassed: number
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export const CycleContext = createContext({} as CyclesContextType)

interface CyclesContextProps {
  children: ReactNode
}

export function CyclesContextProvider({ children }: CyclesContextProps) {
  const [cyclesState, dispatch] = useReducer(
    (state: CyclesState, action: any) => {
      switch (action.type) {
        case 'add_new_cycle':
          return {
            ...state,
            cycles: [...state.cycles, action.payload.newCycle],
            activeCycleId: action.payload.newCycle.id,
          }

        case 'interrupt_current_cycle':
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return { ...cycle, interruptedDate: new Date() }
              } else {
                return cycle
              }
            }),
            activeCycleId: null,
          }

        case 'mark_current_cycle_as_fisished':
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            }),
            activeCycleId: null,
          }

        default:
          return state
      }
    },
    {
      cycles: [],
      activeCycleId: null,
    },
  )

  const [amountSeecondsPassed, setAmountSeecondsPassed] = useState(0)

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cicle) => cicle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSeecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: 'mark_current_cycle_as_fisished',
      payload: {
        activeCycleId,
      },
    })
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startData: new Date(),
    }

    dispatch({
      type: 'add_new_cycle',
      payload: {
        newCycle,
      },
    })

    setAmountSeecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch({
      type: 'interrupt_current_cycle',
      payload: {
        activeCycleId,
      },
    })
  }

  return (
    <CycleContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSeecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
        cycles,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
