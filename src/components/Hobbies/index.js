import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HobbiesCard from "./HobbiesCard"

const Hobbies = ({ column }) => {
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

  const data = hobbiesInfo[0]

  return <HobbiesCard column={column} data={data} />
}

Hobbies.propTypes = {
  column: PropTypes.bool,
}

Hobbies.defaultProps = {
  column: false,
}

export default Hobbies
