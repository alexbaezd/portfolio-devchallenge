import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SkillsCard from "./SkillsCard"

const Skills = ({ column }) => {
  const {
    allStrapiSkills: { nodes: mySkills },
  } = useStaticQuery(graphql`
    {
      allStrapiSkills {
        nodes {
          title
          skill {
            id
            name
            percentage
          }
        }
      }
    }
  `)

  const data = mySkills[0]
  return <SkillsCard column={column} data={data} />
}

Skills.propTypes = {
  column: PropTypes.bool,
}
Skills.defaultProps = {
  column: false,
}

export default Skills
