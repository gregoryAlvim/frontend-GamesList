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
  font-family: 'Baloo 2';
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: 800;
  line-height: 130%;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 50rem;
  height: 4rem;
  padding: 5px;

  border: 1px solid ${({ theme }) => theme['gray-500']};

  &:focus {
    border: 1px solid ${({ theme }) => theme['yellow-500']};
  }
`

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
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

export const TopPageButton = styled.button`
  width: 4rem;
  height: 4rem;
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;

  cursor: pointer;
  border: 1px solid ${({ theme }) => theme['gray-500']};
  background: ${({ theme }) => theme.background};

  &:hover {
    background: ${({ theme }) => theme['gray-200']};
  }
`
