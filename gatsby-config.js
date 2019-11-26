module.exports = {
  siteMetadata: {
    siteUrl: `https://supersimple.pro`,
    title: `Supersimple, agence de sensibilisation et formation à l'accessibilité, l'ergonomie, les performances, l'éco-conception et l'éthique`,
    description: `Nous proposons des ateliers et un accompagnement adapté aux entreprises, start-ups, indépendants et institutions afin d'appréhender les bonnes pratiques du web qui favorisent l'expérience et l'adhésion de vos audiences.`,
    author: `@mediakod`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
          lang: 'fr'
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://supersimple.pro`,
        sitemap: `https://supersimple.pro/sitemap.xml`,
        env: {
          development: {
            policy: [{ userAgent: '*', allow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
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
        icon: `src/assets/img/supersimple-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
