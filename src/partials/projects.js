import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BarCounter from "../components/BarCounter"
import { Button } from "../components/Button"
import { GridColumn } from "../components/Card"
import Project from "../components/Project"
import { H3 } from "../components/Texts"

const sortProjectsByFeatured = projects =>
  projects.filter(project => project.featured === true)
const sortProjects = projects =>
  projects.filter(project => project.featured === false)

const AllProjects = () => {
  const {
    allStrapiProjects: { nodes: projects },
  } = useStaticQuery(graphql`
    {
      allStrapiProjects(sort: { fields: featured, order: DESC }) {
        nodes {
          id
          slug
          title
          featured
          extract
          demo
          link
          image {
            formats {
              medium {
                url
              }
            }
          }
          tags {
            id
            name
          }
        }
      }
    }
  `)

  const mainProjects = sortProjectsByFeatured(projects)

  const otherProjects = sortProjects(projects)

  return (
    <>
      <BarCounter>
        <H3>
          Main Projects <span>({`${mainProjects.length}`})</span>
        </H3>
      </BarCounter>
      <GridColumn col="2">
        {mainProjects.map(item => (
          <Project key={item.id} info={item} column />
        ))}
      </GridColumn>
      <BarCounter>
        <H3>
          Other Projects <span>({otherProjects.length})</span>
        </H3>
        <Button outline>HTML</Button>
        <Button outline>CSS</Button>
        <Button outline>JS</Button>
      </BarCounter>
      {otherProjects.map(item => (
        <Project key={item.id} info={item} />
      ))}
    </>
  )
}

export default AllProjects
