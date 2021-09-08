import styled from "styled-components"
import { Card } from "../Card"

export const CustomCard = styled(Card)`
  padding: 1.37rem 0 1.37rem 1.875rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0.3rem;
  grid-row-gap: 0.5rem;

  @media screen and (min-width: 768px) {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
`
export const Title = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`
export const Extract = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  @media (min-width: 768px) {
    grid-area: ${({ column }) =>
      column === true ? "2 / 1 / 3 / 3" : "2 / 1 / 3 / 2"};
  }
`
export const Image = styled.img`
  grid-area: 1 / 2 / 2 / 3;
  margin: 0;
  width: 100%;
  height: 100px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  align-self: center;
  @media (min-width: 768px) {
    height: auto;
    grid-area: ${({ column }) =>
      column === true ? "1 / 2 / 2 / 3" : "1 / 2 / 3 / 3"};
  }
`
