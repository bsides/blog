module.exports = {
  siteTitle: 'Blog do Rafael Pereira', // Site title.
  siteTitleShort: 'Rafaelp', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Blog do Rafael Pereira', // Alternative site title for SEO.
  siteUrl: 'https://www.rafaelp.com.br', // Domain of your website without pathPrefix.
  siteLogo:
    'https://en.gravatar.com/userimage/10460/4f3b224af280f7ccfff14dd2a9883fba.png?size=150', // Logo used for SEO
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'Blog em português sobre desenvolvimento web frontend, JavaScript, HTML, CSS, frameworks e outros devaneios', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '208402630061604', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-50702825-1', // GA tracking ID.
  disqusShortname: 'rafaelbsides', // Disqus shortname.
  postDefaultCategoryID: 'Meta', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'Rafael "BSIDES" Pereira', // Username to display in the author segment.
  userTwitter: 'bsides', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'São Paulo, Brasil', // User location to display in the author segment.
  userAvatar:
    'https://en.gravatar.com/userimage/10460/4f3b224af280f7ccfff14dd2a9883fba.png?size=150', // User avatar to display in the author segment.
  userDescription:
    'Apaixonado por tecnologia, games, javascript e desenvolvimento web frontend', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/bsides',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/bsides',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Telegram',
      url: 'https://t.me/bsides',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2017. Rafael "BSIDES" Pereira', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#990000', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff', // Used for setting manifest background color.
}
