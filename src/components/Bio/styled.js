import styled from "styled-components"
import { H5, Paragraph } from "../Texts"

export const GridBio = styled.div`
  display: grid;
  grid-column-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: ${({ column }) =>
      column === true ? "auto" : "35% 65%"};
    max-height: 662px;
  }
`
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: ${({ column }) => (column === true ? "column" : "row")};
  }
`
export const JobPosition = styled(Paragraph)`
  margin-bottom: 1rem;
`
export const Name = styled(H5)`
  margin-top: 1rem;
  @media (min-width: 768px) {
    margin-top: ${({ column }) => (column === true ? "1rem" : "0")};
  }
`
export const GridInfo = styled.div`
  display: grid;
  grid-template-columns: 10px auto;
  column-gap: 0.8rem;
  align-items: center;
`
