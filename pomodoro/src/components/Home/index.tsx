import { Play } from '@phosphor-icons/react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmontInput,
  Separator,
  StartCoutdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-sugestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-sugestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Projeto 5" />
          </datalist>

          <label htmlFor="minutesAmont">durante</label>
          <MinutesAmontInput
            type="number"
            id="minutesAmont"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCoutdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCoutdownButton>
      </form>
    </HomeContainer>
  )
}
