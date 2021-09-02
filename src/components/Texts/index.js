import styled from "styled-components"

export const H1 = styled.h1`
  font-size: ${props => props.theme.typeScale.header1};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.titleColor};
`
export const H2 = styled.h2`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  font-size: ${props => props.theme.typeScale.header2};
  margin: 0.5rem 0 1.2rem 0;
  color: ${({ theme }) => theme.titleColor};
`
export const H3 = styled.h3`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  margin: 0.3rem 0;
  font-size: ${props => props.theme.typeScale.header3};
  color: ${({ theme }) => theme.titleColor};
`
export const H4 = styled.h4`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  margin: 0.7rem 0;
  font-size: ${props => props.theme.typeScale.header4};
  color: ${({ theme }) => theme.titleColor};
`
export const H5 = styled.h5`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  margin: 0;
  font-size: ${props => props.theme.typeScale.header5};
  color: ${({ theme }) => theme.titleColor};
`

export const Paragraph = styled.p`
  font-size: ${props => props.theme.typeScale.paragraph};
  line-height: 1.5rem;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  margin: 0;
  color: ${({ theme }) => theme.textColor};
`
export const Small = styled.small`
  font-size: ${props => props.theme.typeScale.helperText};
  line-height: 1.5rem;
  margin: 0 0.5rem 0 0;
  color: ${({ theme }) => theme.textColor};
`
