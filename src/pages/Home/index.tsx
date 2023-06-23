import * as S from './styles'
import { useState } from 'react'
import { useGames } from '../../contexts/GamesContext'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { GameCard } from './components/GameCard'
import { Loader } from '../../components/Loader'

export function Home() {
  const { gamesData, gamesGenre, isLoading } = useGames()

  const [search, setSearch] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('Todos')

  const filteredGames =
    selectedGenre === 'Todos' && search.length > 0
      ? gamesData.filter((game) =>
          game.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )
      : gamesData.filter(
          (game) =>
            game.genre.includes(selectedGenre) &&
            game.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )

  return (
    <S.Container>
      <S.Title>Lista de Games</S.Title>

      <S.ActionsContainer>
        <S.SearchContainer>
          <MagnifyingGlass size={20} />
          <S.SearchInput
            placeholder="Pesquise seu jogo favorito!"
            onChange={(event) => setSearch(event.target.value)}
          />
        </S.SearchContainer>

        <S.SelectGenre
          value={selectedGenre}
          onChange={(event) => setSelectedGenre(event.target.value)}
        >
          {gamesGenre?.map((genre) => (
            <S.OptionGenre key={genre} value={genre}>
              {genre}
            </S.OptionGenre>
          ))}
        </S.SelectGenre>
      </S.ActionsContainer>

      <S.SectionCards>
        {search.length > 0 || selectedGenre !== 'Todos'
          ? filteredGames?.map((game) => (
              <GameCard key={game.id} {...game}></GameCard>
            ))
          : gamesData?.map((game) => (
              <GameCard key={game.id} {...game}></GameCard>
            ))}
        {isLoading && <Loader />}
      </S.SectionCards>
    </S.Container>
  )
}
