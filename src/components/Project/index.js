import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Button } from "../Button"
import { Card, FlexLayout } from "../Card"
import { H4, Paragraph, Small } from "../Texts"
import { ButtonGroup, Image, LinkCustom, Section } from "./styled"

const Project = ({ info, column }) => {
  return (
    <Card column={column}>
      <FlexLayout column={column}>
        <Link to={`/project/${info.slug}`}>
          <Image
            src={info.image.formats.medium.url}
            alt={`demo-project-${info.title}`}
            width="750"
          />
        </Link>
        <Section column={column}>
          {info.tags &&
            info.tags.map(item => <Small key={item.id}>#{item.name}</Small>)}
          <LinkCustom to={`/project/${info.slug}`}>
            <H4>{info.title}</H4>
          </LinkCustom>
          <Paragraph>{info.extract}</Paragraph>
          <ButtonGroup>
            <Button as="a" href={info.demo} target="_blank">
              Demo
            </Button>
            <Button as="a" href={info.link} target="_blank" outline>
              Code
            </Button>
          </ButtonGroup>
        </Section>
      </FlexLayout>
    </Card>
  )
}

Project.propTypes = {
  info: PropTypes.object.isRequired,
  column: PropTypes.bool,
}
export default Project
