const { languages, defaultLanguage } = require('./languages');

module.exports = {
  siteMetadata: {
    title: `Katsura Cafeteria Crowding`,
    author: `ridwan`,
    description: `Crowding research @ITS Lab Kyoto University`,
    siteUrl: `https://katsura.gatsbyjs.io/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-Z9JNNB34F9", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locales`
      }
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-netlify',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        languages,
        defaultLanguage,
        siteUrl: `https://katsura.gatsbyjs.io`,
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: 'common',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          }
        },
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `katsura-crowding`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['DM Sans', 'Open Sans']
        }
      }
    },
  ],
}
