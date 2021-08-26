import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { H3, Small } from "../Texts"
import Progress from "./Progress"
import { GridLayout, SkillGroup, SkillsCard } from "./styled"

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

  return (
    <SkillsCard column={column}>
      <H3>{mySkills[0].title}</H3>
      <GridLayout column={column}>
        {mySkills[0].skill.map(item => (
          <SkillGroup key={item.id}>
            <Small>{item.name}</Small>
            <div>
              <Progress max={item.percentage} />
            </div>
          </SkillGroup>
        ))}
      </GridLayout>
    </SkillsCard>
  )
}

export default Skills
