import { GameType } from '../../../../@types/mockes'
import { Link } from 'react-router-dom'
import * as S from './styles'

export function GameCard({ ...data }: GameType) {
  return (
    <S.Card>
      <Link to={data.game_url} target="_blank">
        <S.GameImage src={data.thumbnail} alt={data.short_description} />
      </Link>

      <S.CardContent>
        <S.GameTitle>{data.title}</S.GameTitle>
        <S.GamePlatform>{data.platform}</S.GamePlatform>
      </S.CardContent>
    </S.Card>
  )
}
