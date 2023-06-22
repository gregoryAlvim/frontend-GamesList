import * as S from './styles'
import { GameController } from '@phosphor-icons/react'

export function Header() {
  return (
    <S.Container>
      <GameController size={64} />
    </S.Container>
  )
}
