module.exports = {
  siteMetadata: {
    title: `Supersimple, agence de sensibilisation et formation à l'accessibilité, l'ergonomie, les performances, l'éco-conception et l'éthique`,
    description: `Nous proposons des ateliers et un accompagnement adapté aux entreprises, start-ups, indépendants et institutions afin d'appréhender les bonnes pratiques du web qui favorisent l'expérience et l'adhésion de vos audiences.`,
    author: `@mediakod`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Supersimple, sensibilisation et formation aux bonnes pratiques du web`,
        short_name: `supersimple`,
        start_url: `/`,
        background_color: `#302b30`,
        theme_color: `#302b30`,
        display: `minimal-ui`,
        icon: `src/assets/img/supersimple-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
