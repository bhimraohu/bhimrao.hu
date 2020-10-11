const { prismicRepo, defaultLanguage, langs } = require('./prismic-config')

module.exports = {
  siteMetadata: {
    title: `Bhimrao`,
    description: `Bhimrao egyesület honlapja.`,
    author: `Bhimrao`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: prismicRepo,
        defaultLang: defaultLanguage,
        langs,
        pages: [
          {
            type: 'homepage',
            match: '/:lang?',
            path: '/:lang?',
            component: require.resolve('./src/templates/homepage.js'),
            langs,
          },
          // {
          //   type: 'page',
          //   match: '/:lang?/:uid',
          //   path: '/:lang?/:uid',
          //   component: require.resolve('./src/templates/page.js'),
          //   langs,
          // },
          // {
          //   type: 'projects',
          //   match: '/:lang?/projects/:uid',
          //   path: '/:lang?/projects/:uid',
          //   component: require.resolve('./src/templates/projects.js'),
          //   langs,
          // },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
