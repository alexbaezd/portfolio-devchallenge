import PropTypes from "prop-types"
import React from "react"
import { H3, Small } from "../Texts"
import Progress from "./Progress"
import { CustomCard, GridLayout, SkillGroup } from "./styled"

const SkillsCard = ({ column, data }) => {
  return (
    <CustomCard column={column}>
      <H3>{data.title}</H3>
      <GridLayout column={column}>
        {data.skill.map(item => (
          <SkillGroup key={item.id}>
            <Small>{item.name}</Small>
            <div>
              <Progress max={item.percentage} />
            </div>
          </SkillGroup>
        ))}
      </GridLayout>
    </CustomCard>
  )
}

SkillsCard.propTypes = {
  column: PropTypes.bool,
  data: PropTypes.object.isRequired,
}

export default SkillsCard
