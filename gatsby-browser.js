/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/700.css"
import React from "react"
import { WrapPage } from "./src/components/WrapPage"

export const wrapRootElement = ({ element }) => <WrapPage>{element}</WrapPage>
