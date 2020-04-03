import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import TypographyOverride from './typographyOverride'

export default () => {

  const defaultTheme = createMuiTheme({
    palette: {
      "primaryColor": "#000",
      "secondaryColor": "#fff",
      "tertiaryColor": "#e4ac49",
    },
    spacing: 10,
  });

  const typography = TypographyOverride(defaultTheme)

  return createMuiTheme({
    palette: {
      ...defaultTheme.palette
    },
    spacing: defaultTheme.spacing,
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            backgroundColor: defaultTheme.palette.primaryColor,
            color: defaultTheme.palette.secondaryColor,
            margin: defaultTheme.spacing(10, 0, 0, 0)
          }
        }
      },
      ...typography
    },
    custom: {
      clientsAnimationSpeed: 35
    }
  });
};