import styled from "styled-components"

export const Card = styled.div`
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 5px 6px 21px 2px rgba(0, 0, 0, 0.39);
  padding: 1.37rem 1.875rem;
  margin: 1rem 0 1rem 0;
  max-width: 100%;
  height: fit-content;
  @media (min-width: 768px) {
    max-width: ${({ column }) => (column === true ? "410px" : "100%")};
  }
`
export const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: ${({ gap }) => (gap ? gap : "0")};
  @media (min-width: 768px) {
    flex-direction: ${({ column }) => (column === true ? "column" : "row")};
  }
`
export const GridColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: ${({ col }) =>
      col ? `repeat(${col}, 1fr)` : "repeat(3, 1fr)"};
    grid-column-gap: 0.8rem;
  }
`
