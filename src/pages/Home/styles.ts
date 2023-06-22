import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SectionCards = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 380px));
  gap: 2rem;
  margin-top: 3rem;
`

export const Title = styled.h1`
  margin-bottom: 2rem;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 50rem;
  height: 4rem;
  padding: 5px;

  border: 1px solid ${({ theme }) => theme['gray-500']};
`

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SelectGenre = styled.select`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;

  width: 20rem;
  height: 4rem;
  padding: 5px;

  border: 1px solid ${({ theme }) => theme['gray-500']};
`

export const OptionGenre = styled.option``
