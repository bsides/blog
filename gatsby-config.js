module.exports = {
  siteMetadata: {
    title: 'Blog do Rafael Pereira',
    author: 'Rafael "BSIDES" Pereira',
    description:
      'Blog em português sobre desenvolvimento web, JavaScript, HTML, CSS, frameworks e outros devaneios',
    siteUrl: 'https://rafaelp.com.br/',
  },
  // pathPrefix: '/blog',
  plugins: [
    { resolve: `gatsby-plugin-styled-components` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 740,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              class: 'emoji-icon',
              size: 64,
              styles: {
                display: 'inline',
                margin: '0',
                'margin-top': '1px',
                position: 'relative',
                top: '5px',
                width: '25px',
              },
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-50702825-1`,
      },
    },
    'gatsby-plugin-catch-links',
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog do Rafael Pereira`,
        short_name: `rafaelp.com.br`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#990000`,
        display: `minimal-ui`,
        icon: `src/assets/profile.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog do Rafael Pereira`,
        short_name: `rafaelp.com.br`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#990000`,
        display: `minimal-ui`,
        icon: `src/assets/profile.jpg`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
  ],
}
