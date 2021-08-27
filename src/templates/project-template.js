import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import { ButtonLink } from "../components/Button"
import Layout from "../components/layout"
import { PostImage } from "./styled"

const ProjectPage = ({ data: { project } }) => {
  return (
    <Layout>
      <article>
        <PostImage src={project.image.formats.medium.url} alt={project.title} />
        {project.content && (
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {project.content}
          </ReactMarkdown>
        )}
        <ButtonLink to="/">Home</ButtonLink>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: strapiProjects(slug: { eq: $slug }) {
      content
      image {
        formats {
          medium {
            url
          }
        }
      }
    }
  }
`

export default ProjectPage
