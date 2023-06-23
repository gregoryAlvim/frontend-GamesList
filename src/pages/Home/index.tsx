import * as S from './styles'
import { useState } from 'react'
import { useGames } from '../../contexts/GamesContext'
import { CaretUp, MagnifyingGlass } from '@phosphor-icons/react'
import { GameCard } from './components/GameCard'
import { Loader } from '../../components/Loader'

export function Home() {
  const { gamesData, gamesGenre, isLoading } = useGames()

  const [search, setSearch] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('Todos')
  const [pageYPosition, setPageYPosition] = useState(0)
  const notFoundGameMessage =
    'Nenhum jogo foi encontrado em nossa base de dados!'

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

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY)
  }

  window.addEventListener('scroll', getPageYAfterScroll)

  function handleToTopPage() {
    window.document.body.scrollTop = 0
    window.document.documentElement.scrollTop = 0
  }

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
        {filteredGames.length === 0 && !isLoading && notFoundGameMessage}
        {isLoading && <Loader />}
      </S.SectionCards>

      {pageYPosition !== 0 && (
        <S.TopPageButton onClick={handleToTopPage}>
          <CaretUp size={24} />
        </S.TopPageButton>
      )}
    </S.Container>
  )
}
