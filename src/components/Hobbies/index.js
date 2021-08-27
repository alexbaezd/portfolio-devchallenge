import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Card, FlexLayout } from "../Card"
import { H2, H3, Paragraph } from "../Texts"
import { HobbyCard, Image } from "./styled"

const Hobbies = ({ column, ...props }) => {
  const {
    allStrapiHobbiesCertificates: { nodes: hobbiesInfo },
  } = useStaticQuery(graphql`
    {
      allStrapiHobbiesCertificates {
        nodes {
          title
          certificates {
            description
            id
            title
            image {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <Card column={column} {...props}>
      <H2>{hobbiesInfo[0].title}</H2>
      <FlexLayout column={column}>
        {hobbiesInfo[0].certificates.map(item => (
          <HobbyCard key={item.id} column={column}>
            <Image
              src={item.image.url}
              width={724}
              height={278}
              alt={item.title}
            />
            <H3>{item.title}</H3>
            <Paragraph>{item.description}</Paragraph>
          </HobbyCard>
        ))}
      </FlexLayout>
    </Card>
  )
}

Hobbies.propTypes = {
  column: PropTypes.bool,
}

Hobbies.defaultProps = {
  column: false,
}

export default Hobbies
