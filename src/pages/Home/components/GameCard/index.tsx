import { GameType } from '../../../../@types/mockes'
import * as S from './styles'

export function GameCard({ ...data }: GameType) {
  return (
    <S.Card>
      <S.GameImage src={data.thumbnail} alt={data.short_description} />
      <S.CardContent>
        <S.GameTitle>{data.title}</S.GameTitle>
      </S.CardContent>
    </S.Card>
  )
}
