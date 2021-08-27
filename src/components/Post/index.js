import { Link } from "gatsby"
import React from "react"
import { LinkText } from "../Button"
import { H2, Paragraph, Small } from "../Texts"
import { CardPost, Extract, GridPost, ImagePost, Title } from "./styled"

const Post = ({ column, info }) => {
  return (
    <CardPost column={column}>
      <GridPost>
        <Title>
          <Small>Blog</Small>
          <Link to={`/blog/${info.slug}`} style={{ textDecoration: "none" }}>
            <H2>{info.title}</H2>
          </Link>
        </Title>
        <Extract column={column}>
          <Paragraph style={{ marginBottom: `0.5rem` }}>
            {info.extract.substring(0, 140)}...
          </Paragraph>
          <LinkText to={`/blog/${info.slug}`}>Read more</LinkText>
        </Extract>
        <ImagePost
          column={column}
          src={info.image.formats.small.url}
          width={300}
          alt={info.title}
        />
      </GridPost>
    </CardPost>
  )
}

export default Post
