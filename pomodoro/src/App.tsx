import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './components/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './components/Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}
