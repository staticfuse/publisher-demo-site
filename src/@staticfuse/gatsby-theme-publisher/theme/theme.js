import theme from "@staticfuse/gatsby-theme-publisher/src/theme/theme"

const publisherTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: theme.colors.orange['500'],
    // muted: "#999",
    headings: theme.colors.orange['500'],
    links: theme.colors.orange['500'],
    // navLink: "#ffffff",
    headerBg: theme.colors.orange['500'],
    buttonBg: theme.colors.orange['500']
  },
}


export default publisherTheme
