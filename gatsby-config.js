require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `My Starter`,
    description: `This is my barebone Gatsby starter. It ships with the main Gatsby configuration files. It is based on Gatsby default starter but is significally changed.  Streamlined and extended at the same time. No styling except basic css reset `,
    author: `zbyszrom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-firesource",
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: "Book",
            collection: "books",
            map: doc => ({
              title: doc.title,
              summary: doc.summary,
              author___NODE: doc.author.id,
            }),
          },
          {
            type: "Author",
            collection: "authors",
            map: doc => ({
              name: doc.name,
            }),
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Inria Serif`,
          },
          {
            family: `Tomorrow`,
          },
        ],
      },
    },
    "gatsby-plugin-styled-components",
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
