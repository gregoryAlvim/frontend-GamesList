import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { toast } from 'react-toastify'
import { GameType } from '../@types/mockes'
import 'react-toastify/dist/ReactToastify.css'

interface GamesContextType {
  gamesData: GameType[]
  gamesGenre: string[]
  isLoading: boolean
}

interface GamesContextProviderProps {
  children: ReactNode
}

export const GamesContext = createContext({} as GamesContextType)

export function GamesContextProvider({ children }: GamesContextProviderProps) {
  const [gamesData, setGamesData] = useState<GameType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const AUTH_EMAIL = import.meta.env.VITE_AUTH_EMAIL
  const errorStatusCode = 500

  const gamesGenre = ['Todos', ...new Set(gamesData.map((game) => game.genre))]

  function showToastError(message: string) {
    toast.error(message)
  }

  async function fetchGames() {
    try {
      const timer = setTimeout(() => {
        return showToastError(
          'O servidor demorou para responder, tente mais tarde',
        )
      }, 5000)

      const response = await api.get('data', {
        headers: {
          'dev-email-address': AUTH_EMAIL,
        },
      })

      clearTimeout(timer)

      setIsLoading(false)
      setGamesData(response.data)
    } catch (error: any) {
      if (error.response.status >= errorStatusCode) {
        showToastError(
          'O servidor falhou em responder, tente recarregar a página!',
        )
      } else {
        showToastError(
          'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde!',
        )
      }
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchGames()
    })
    console.log('chamou')
    return () => clearTimeout(timer)
  }, [])

  return (
    <GamesContext.Provider value={{ gamesData, gamesGenre, isLoading }}>
      {children}
    </GamesContext.Provider>
  )
}

export function useGames() {
  const context = useContext(GamesContext)

  return context
}
