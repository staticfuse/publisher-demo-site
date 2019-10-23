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
        mailChimpEndpoint: "https://gmail.us4.list-manage.com/subscribe/post?u=914ae019ecb5ca02710493cdd&amp;id=d7c63b789d",
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `https://publishertheme.staticfuse.com`,
        blogURI: '/blog'
      },
    },
  ],
}