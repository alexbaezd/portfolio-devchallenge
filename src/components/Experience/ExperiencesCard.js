import PropTypes from "prop-types"
import React from "react"
import { Card, FlexLayout } from "../Card"
import { H2, H5, Paragraph, Small } from "../Texts"
import { ExperienceGrid, Icon } from "./styled"

const ExperiencesCard = ({ data, column }) => {
  return (
    <Card column={column}>
      <H2>{data.title}</H2>
      <FlexLayout column={column} gap="1rem">
        {data.experience.map(item => (
          <ExperienceGrid key={item.id}>
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
          </ExperienceGrid>
        ))}
      </FlexLayout>
    </Card>
  )
}

ExperiencesCard.propTypes = {
  data: PropTypes.object.isRequired,
  column: PropTypes.bool,
}

export default ExperiencesCard
