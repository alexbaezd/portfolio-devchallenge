import styled from "styled-components"

export const HobbyCard = styled.div`
  padding: 0 0.5rem;
  &:nth-child(2) {
    margin: 0;
  }
  @media (min-width: 768px) {
    &:nth-child(2) {
      margin: ${({ column }) => (column === true ? "0 " : "0 3rem ")};
    }
  }
`
export const Image = styled.img`
  margin: 1rem 0;
  border-radius: 15px;
  width: 100%;
`
