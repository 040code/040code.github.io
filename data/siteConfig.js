module.exports = {
  siteTitle: 'Open Sourceress',
  siteDescription: 'Kernel Linux e outras mágicas',
  authorName: 'Open Soureceress',
  twitterUsername: 'OpenSourceresss',
  authorAvatar: '',
  multilangPosts: false, // enable/disable flags in post lists
  authorDescription: ``,
  siteUrl: 'http://open-sourceress.com/',
  disqusSiteUrl: 'https://open-sourceress.disqus.com/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: '/images/img-fundo.jpg',
  googleAnalyticsId: '',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'src/assets/tux.png',
  postsPerPage: 6,
  disqusShortname: 'open-sourceress',
  headerTitle: 'Open Sourceress',
  headerLinksIcon: 'tux.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: '🏡 Open Sourceress',
      url: '/',
    },
    {
      label: 'Sobre o blog',
      url: '/about',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  footerLinks: [
    [
      'Open Sourceress © 2019',
      {
        label: 'Gatsby',
        prefix: 'Build with ',
        url: 'https://www.gatsbyjs.org/',
      },
      {
        label: 'gatsby-starter-morning-dew',
        prefix: 'Theme Using ',
        url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
      },
      {
        label: '040code',
        prefix: 'Theme Using ',
        url: 'https://github.com/040code/',
      },
      {
        label: 'GitHub',
        prefix: 'Hosted with by ',
        url: 'https://github.com',
      },
    ],
    [
      'Explore',
      {
        label: 'Home',
        prefix: '',
        url: '/',
      },
      {
        label: 'Quem sou eu?',
        prefix: '',
        url: '/about',
      },
    ],
    [
      'Siga o Blog',
      {
        label: 'Twitter',
        url: 'https://twitter.com/OpenSoureceresss',
      },
    ],
    [
      'Source',
      {
        label: 'Github',
        url: 'https://github.com/040code/',
      },
    ],
  ],
}
