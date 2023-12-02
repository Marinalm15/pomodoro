import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './components/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}
