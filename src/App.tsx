import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { GamesContextProvider } from './contexts/GamesContext'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <GamesContextProvider>
            <Router />
          </GamesContextProvider>
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
