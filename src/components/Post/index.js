import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { LinkText } from "../Button"
import { H2, Paragraph, Small } from "../Texts"
import { CustomCard, Extract, Grid, Image, Title } from "./styled"

const Post = ({ column, data }) => {
  return (
    <CustomCard column={column}>
      <Grid>
        <Title>
          <Small>Blog</Small>
          <Link to={`/blog/${data.slug}`} style={{ textDecoration: "none" }}>
            <H2>{data.title}</H2>
          </Link>
        </Title>
        <Extract column={column}>
          <Paragraph style={{ marginBottom: `0.5rem` }}>
            {data.extract.substring(0, 140)}...
          </Paragraph>
          <LinkText to={`/blog/${data.slug}`}>Read more</LinkText>
        </Extract>
        <Image
          column={column}
          src={data.image.formats.small.url}
          width={300}
          alt={data.title}
        />
      </Grid>
    </CustomCard>
  )
}

Post.propTypes = {
  column: PropTypes.bool,
  data: PropTypes.object.isRequired,
}

export default Post
