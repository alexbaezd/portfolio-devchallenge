import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"
import { ButtonLink } from "../components/Button"
import Layout from "../components/layout"
import { PostImage } from "./styled"

const Blog = ({ data: { blog } }) => {
  return (
    <Layout>
      <article>
        <PostImage src={blog.image.formats.medium.url} alt={blog.title} />
        {blog.content && <ReactMarkdown>{blog.content}</ReactMarkdown>}
        <ButtonLink to="/">Home</ButtonLink>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
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

export default Blog
