import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Card, FlexLayout } from "../Card"
import { H2, H5, Paragraph, Small } from "../Texts"
import { ExperienceCard, Icon } from "./styled"

const Experience = ({ column, ...props }) => {
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

  return (
    <Card column={column} {...props}>
      <H2>{data.title}</H2>
      <FlexLayout column={column} gap="1rem">
        {data.experience.map(item => (
          <ExperienceCard key={item.id} column={column}>
            <Icon
              src={item.logo.url}
              width={64}
              alt={`job-position-${item.job}`}
              style={{ gridArea: `1 / 1 / 3 / 2` }}
            />
            <Small style={{ gridArea: `1 / 2 / 2 / 4` }}>{item.date}</Small>
            <H5 style={{ gridArea: `2 / 2 / 3 / 4` }}>{item.job}</H5>
            <Paragraph style={{ gridArea: `3 / 2 / 4 / 4` }}>
              {item.description}
            </Paragraph>
          </ExperienceCard>
        ))}
      </FlexLayout>
    </Card>
  )
}

export default Experience
