import styled from "styled-components"

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 52px 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-column-gap: 1.5rem;
  grid-row-gap: 0.3rem;
  width: 100%;
  margin-bottom: 2rem;
  @media (min-width: 374px) {
    grid-template-rows: 22px auto auto;
    grid-row-gap: 0.4rem;
  }
  @media (min-width: 768px) {
    grid-row-gap: 0.7rem;
    grid-template-rows: 20px 30px auto;
  }
`
export const Icon = styled.img`
  margin: 0;
  width: 48px;
`
