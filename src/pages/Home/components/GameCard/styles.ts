import styled from 'styled-components'

export const Card = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme['gray-400']};
`
export const CardContent = styled.section`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const GameImage = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 5px 5px 0 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`

export const GameTitle = styled.h1`
  color: ${({ theme }) => theme['yellow-500']};
  font-family: 'Roboto';
  font-size: 1.5rem;
  font-weight: 700;
`

export const GamePlatform = styled.span`
  color: ${({ theme }) => theme['yellow-500']};
  font-family: 'Roboto';
  font-size: 1.5rem;
  font-weight: 700;
`
