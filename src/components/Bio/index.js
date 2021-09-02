import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { MdEmail, MdPhone } from "react-icons/md"
import { Card } from "../Card"
import { Paragraph, Small } from "../Texts"
import { Flex, Grid, InfoContainer, JobPosition, Name } from "./styled"

const Bio = ({ column, ...props }) => {
  const {
    allStrapiBio: { nodes: info },
  } = useStaticQuery(graphql`
    {
      allStrapiBio {
        nodes {
          name
          job
          phone
          email
          description
          image {
            url {
              childImageSharp {
                gatsbyImageData(width: 250, height: 250)
              }
            }
          }
        }
      }
    }
  `)

  const data = info[0]

  return (
    <Card column={column} {...props}>
      <Grid column={column}>
        <GatsbyImage
          image={getImage(data.image.url.childImageSharp)}
          width={270}
          quality={70}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt={`avatar-${data.name}`}
          placeholder="blurred"
          style={{
            margin: `0`,
            borderRadius: `12px`,
          }}
        />
        <div>
          <Flex column={column}>
            <div>
              <Name column={column}>{data.name}</Name>
              <JobPosition>{data.job}</JobPosition>
            </div>
            <InfoContainer>
              <MdEmail />
              <Small>{data.email}</Small>
              <MdPhone />
              <Small>{data.phone}</Small>
            </InfoContainer>
          </Flex>
          <div style={{ marginTop: `1.7rem` }}>
            <Paragraph style={{ marginBottom: `1rem` }}>
              {data.description}
            </Paragraph>
          </div>
        </div>
      </Grid>
    </Card>
  )
}

export default Bio
