import styled from 'styled-components'

export const Card = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 100%;
`
export const CardContent = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GameImage = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 5px 5px 0 0;
`

export const GameTitle = styled.h1`
  color: ${({ theme }) => theme['yellow-500']};
`
