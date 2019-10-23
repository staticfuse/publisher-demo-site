import theme from "@staticfuse/gatsby-theme-publisher/src/theme/theme"

const publisherTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: theme.colors.blue['500'],
    // muted: "#999",
    headings: theme.colors.blue['500'],
    links: theme.colors.blue['500'],
    navLink: "#ffffff",
    headerBg: theme.colors.blue['500'],
    buttonBg: theme.colors.blue['500']
  },
}


export default publisherTheme
