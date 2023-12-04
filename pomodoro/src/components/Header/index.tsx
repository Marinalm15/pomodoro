import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { Atom, Scroll, Timer } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <Atom size={35} color="#015F43" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
