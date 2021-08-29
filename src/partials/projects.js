import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import BarCounter from "../components/BarCounter"
import { Button } from "../components/Button"
import { GridColumn } from "../components/Card"
import Project from "../components/Project"
import { H3 } from "../components/Texts"

const projectsFilterByTag = (tag, array) => {
  const projectsByTag = array.filter(item => item.name === tag)

  return projectsByTag[0].projects
}

const AllProjects = () => {
  const [currentTag, setCurrentTag] = useState("REACT")

  const data = useStaticQuery(graphql`
    {
      PROJECTS: allStrapiProjects(filter: { featured: { eq: true } }) {
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
      TAGS: allStrapiTags {
        nodes {
          id
          name
          projects {
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
          }
        }
      }
    }
  `)

  const mainProjects = data.PROJECTS.nodes
  const otherProjects = data.TAGS.nodes

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
        <H3>Other Projects: {currentTag}</H3>
        {otherProjects.map(item => (
          <Button
            key={item.id}
            outline
            size="small"
            onClick={() => setCurrentTag(item.name)}
          >
            {item.name}
          </Button>
        ))}
      </BarCounter>
      {projectsFilterByTag(currentTag, otherProjects).map(item => {
        return <Project key={item.id} info={item} />
      })}
    </>
  )
}

export default AllProjects
