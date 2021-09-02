import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ExperiencesCard from "./ExperiencesCard"

const Experience = ({ column }) => {
  const {
    allStrapiExperiences: { nodes: exp },
  } = useStaticQuery(graphql`
    {
      allStrapiExperiences {
        nodes {
          title
          experience {
            id
            job
            description
            date
            logo {
              url
            }
          }
        }
      }
    }
  `)

  const data = exp[0]

  return <ExperiencesCard data={data} column={column} />
}

export default Experience
