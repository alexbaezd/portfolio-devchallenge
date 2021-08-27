import { graphql } from "gatsby"
import * as React from "react"
import Bio from "../components/Bio"
import { FlexLayout } from "../components/Card"
import Experience from "../components/Experience"
import Hobbies from "../components/Hobbies"
import Layout from "../components/layout"
import Post from "../components/Post"
import Seo from "../components/seo"
import Skills from "../components/Skills"
import AllProjects from "../partials/projects"

const IndexPage = ({ data }) => {
  const {
    allStrapiBlogs: { nodes },
  } = data

  return (
    <Layout>
      <Seo title="Home" />
      <Bio />
      <FlexLayout gap="1rem">
        <FlexLayout column>
          <Skills column />
          <Hobbies column />
        </FlexLayout>
        <FlexLayout column>
          <Experience column />
          <Post column info={nodes[0]} />
        </FlexLayout>
      </FlexLayout>
      <AllProjects />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiBlogs(limit: 1, sort: { fields: created_at }) {
      nodes {
        title
        extract
        slug
        image {
          formats {
            small {
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
