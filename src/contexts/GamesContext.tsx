import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { GameType } from '../@types/mockes'

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

  const errorStatusCode = 500

  const gamesGenre = ['Todos', ...new Set(gamesData.map((game) => game.genre))]

  async function fetchGames() {
    try {
      const timer = setTimeout(() => {
        alert('O servidor demorou para responder, tente mais tarde')
      }, 5000)

      const response = await api.get('data', {
        headers: {
          'dev-email-address': 'gregori.alvim@gmail.com',
        },
      })

      clearTimeout(timer)

      setGamesData(response.data)
    } catch (error: any) {
      if (error.response.status >= errorStatusCode) {
        alert('O servidor falhou em responder, tente recarregar a página!')
      } else {
        alert(
          'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde!',
        )
      }
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchGames()
      setIsLoading(false)
    }, 2500)

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
