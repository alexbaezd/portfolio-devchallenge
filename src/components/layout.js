/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types"
import * as React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 0.75rem 1.45rem;
  @media screen and (min-width: 768px) {
    padding: 0 1.0875rem 1.45rem;
  }
`
const Layout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
      <footer
        style={{
          marginTop: `2rem`,
          textAlign: `center`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
