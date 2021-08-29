require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Portfolio | DevChallenge.io`,
    description: `This is a challenge from DevChallenge.io, Portfolio site and fetch data from Strapi & Cloudinary`,
    author: `@alexbaez`,
    siteUrl: `https://portfolio-devchallenge.vercel.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL,
        queryLimit: 1000,
        collectionTypes: [`blogs`, `projects`, `tags`],
        singleTypes: [`bio`, `experiences`, `skills`, `hobbies-certificates`],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2F80ED`,
        theme_color: `#2F80ED`,
        display: `minimal-ui`,
        icon: `src/images/devchallenges.png`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
