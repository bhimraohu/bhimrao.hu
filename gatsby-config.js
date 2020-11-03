const { prismicRepo, defaultLanguage, langs, projectPathBase, studyHallPathBase } = require('./prismic-config')

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
          {
            type: 'about_us',
            match: '/:lang?/:uid',
            path: '/:lang?/:uid',
            component: require.resolve('./src/templates/about_us.js'),
            langs,
          },
          {
            type: 'news',
            match: '/:lang?/:uid',
            path: '/:lang?/:uid',
            component: require.resolve('./src/templates/news.js'),
            langs,
          },
          {
            type: 'projects',
            match: '/:lang?/:uid',
            path: '/:lang?/:uid',
            component: require.resolve('./src/templates/projects.js'),
            langs,
          },
          {
            type: 'contact_page',
            match: '/:lang?/:uid',
            path: '/:lang?/:uid',
            component: require.resolve('./src/templates/contact_page.js'),
            langs,
          },
          {
            type: 'help_us',
            match: '/:lang?/:uid',
            path: '/:lang?/:uid',
            component: require.resolve('./src/templates/help_us.js'),
            langs,
          },
          {
            type: 'team',
            match: '/:lang?/:uid',
            path: '/:lang?/:uid',
            component: require.resolve('./src/templates/team.js'),
            langs,
          },
          {
            type: 'search',
            match: '/:lang?/:uid',
            path: '/:lang?/:uid',
            component: require.resolve('./src/templates/search.js'),
            langs,
          },
          {
            type: 'project',
            match: `/:lang?/${projectPathBase}/:uid`,
            path: `/:lang?/${projectPathBase}/:uid`,
            component: require.resolve('./src/templates/project.js'),
            langs,
          },
          {
            type: 'study_hall',
            match: `/:lang?/${studyHallPathBase}/:uid`,
            path: `/:lang?/${studyHallPathBase}/:uid`,
            component: require.resolve('./src/templates/study_hall.js'),
            langs,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
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
        icon: `static/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
