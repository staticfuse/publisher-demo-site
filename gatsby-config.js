module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Publisher',
    description: 'A demo of the Gatsby Publisher theme.',
    author: 'Static Fuse',
    twitter: 'staticfuse',
    siteUrl: `https://staticfuse.com`,
  },
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        starterPages: true,
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `https://publishertheme.staticfuse.com`,
        blogURI: '/blog'
      },
    },
  ],
}