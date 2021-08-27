import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { MdEmail, MdPhone } from "react-icons/md"
import { Card } from "../Card"
import { Paragraph, Small } from "../Texts"
import { Flex, GridBio, GridInfo, JobPosition, Name } from "./styled"

const Bio = ({ column, ...props }) => {
  const data = useStaticQuery(graphql`
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

  const {
    allStrapiBio: { nodes: info },
  } = data

  const bio_info = info[0]

  return (
    <Card column={column} {...props}>
      <GridBio column={column}>
        <GatsbyImage
          image={getImage(bio_info.image.url.childImageSharp)}
          width={270}
          quality={70}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt={`avatar-${bio_info.name}`}
          placeholder="blurred"
          style={{
            margin: `0`,
            borderRadius: `12px`,
          }}
        />
        <div>
          <Flex column={column}>
            <div>
              <Name column={column}>{bio_info.name}</Name>
              <JobPosition>{bio_info.job}</JobPosition>
            </div>
            <GridInfo>
              <MdEmail />
              <Small>{bio_info.email}</Small>
              <MdPhone />
              <Small>{bio_info.phone}</Small>
            </GridInfo>
          </Flex>
          <div style={{ marginTop: `1.7rem` }}>
            <Paragraph style={{ marginBottom: `1rem` }}>
              {bio_info.description}
            </Paragraph>
          </div>
        </div>
      </GridBio>
    </Card>
  )
}

export default Bio
