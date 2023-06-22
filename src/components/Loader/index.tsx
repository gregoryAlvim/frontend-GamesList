import * as S from './styles'
import { PacmanLoader } from 'react-spinners'
import { useTheme } from 'styled-components'

export function Loader() {
  const theme = useTheme()

  return (
    <S.LoaderContainer>
      <PacmanLoader color={theme['gray-800']} />
    </S.LoaderContainer>
  )
}
