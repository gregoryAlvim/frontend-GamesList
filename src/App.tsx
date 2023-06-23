import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { GamesContextProvider } from './contexts/GamesContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter basename="/frontend-GamesList">
          <GamesContextProvider>
            <Router />
            <ToastContainer toastClassName="foo" autoClose={3000} />
          </GamesContextProvider>
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
