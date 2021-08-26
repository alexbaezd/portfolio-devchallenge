import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html {
    font-size:16px;
    box-sizing:border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  *,*:before, *:after{
    box-sizing:inherit;
  }

  body{
    margin:0;
    padding:0;
    font-family:${props => props.theme.primaryFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f2f2f2;
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  main{
    width:90%;
    margin:0 auto;
  }
  ul{
    list-style: circle;
  }
  h1{
    font-size: ${props => props.theme.typeScale.header1};
  }
  h2{
    font-size: ${props => props.theme.typeScale.header2};
  }
  h3{
    font-size: ${props => props.theme.typeScale.header3};
  }
  h4{
    font-size: ${props => props.theme.typeScale.header4};
  }
  h5{
    font-size: ${props => props.theme.typeScale.header5};
  }
  p{
    font-size: ${props => props.theme.typeScale.paragraph};
    line-height: 1.5rem;
  }
  pre{
    background:black;
    color:white;
    border-radius: 10px;
    padding:1rem 0.5rem;
    overflow-y: scroll;
  }
`
