import PropTypes from "prop-types"
import React from "react"
import { Card, FlexLayout } from "../Card"
import { H2, H3, Paragraph } from "../Texts"
import { Container, Image } from "./styled"

const HobbiesCard = ({ column, data }) => {
  return (
    <Card column={column}>
      <H2>{data.title}</H2>
      <FlexLayout column={column}>
        {data.certificates.map(item => (
          <Container key={item.id} column={column}>
            <Image src={item.image.url} width={724} alt={item.title} />
            <H3>{item.title}</H3>
            <Paragraph>{item.description}</Paragraph>
          </Container>
        ))}
      </FlexLayout>
    </Card>
  )
}

HobbiesCard.propTypes = {
  column: PropTypes.bool,
  data: PropTypes.object.isRequired,
}

export default HobbiesCard
