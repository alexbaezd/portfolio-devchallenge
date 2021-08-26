import React from "react"
import { ThemeProvider } from "styled-components"
import { defaultTheme, GlobalStyles } from "../utils"

export const WrapPage = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
