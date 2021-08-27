import { Link } from "gatsby"
import styled from "styled-components"

export const Section = styled.section`
  margin-left: 0;
  flex-shrink: 3;
  @media (min-width: 768px) {
    margin-left: ${({ column }) => (column === true ? "0" : "2rem")};
  }
`
export const ButtonGroup = styled.div`
  margin-top: 2rem;
`

export const LinkCustom = styled(Link)`
  text-decoration: none;
`
export const Image = styled.img`
  margin: 0 0 1rem 0;
  border-radius: 12px;
  width: 100%;
  max-width: 350px;
`
