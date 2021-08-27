/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)

  const resultProjects = await graphql(`
    {
      projects: allStrapiProjects {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blog/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })

  resultProjects.data.projects.nodes.forEach(project => {
    createPage({
      path: `/project/${project.slug}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        slug: project.slug,
      },
    })
  })
}

exports.createSchemaCustomization = ({
  actions: { createTypes, printTypeDefinitions },
}) => {
  createTypes(`
    type StrapiBio implements Node {
      image: StrapiBioImage 
    }
    
    type StrapiBioImage @dontInfer{
      url: File @link(by: "url")
    }
  `)

  //printTypeDefinitions({ path: "./types.txt" })
}

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  createNodeId,
  cache,
}) => {
  if (node.internal.type === "StrapiBio") {
    node.image = await createRemoteFileNode({
      url: node.image.url,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
    })
  }
}
