import styled from "styled-components"
import { Card, GridColumn } from "../Card"

export const CustomCard = styled(Card)`
  max-height: 315px;
`

export const GridLayout = styled(GridColumn)`
  grid-column-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: ${({ column }) =>
      column === true ? "auto" : "repeat(2, 1fr)"};
  }
`
export const SkillGroup = styled.div`
  display: grid;
  grid-template-columns: 85px auto;
  column-gap: 1rem;
  align-items: center;
  margin: 0.5rem 0;
`
