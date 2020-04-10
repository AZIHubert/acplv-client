import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import TypographyOverride from './typographyOverride'
import TextfieldOverride from './textfieldOverride'

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
  const textfield = TextfieldOverride(defaultTheme)

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
          }
        }
      },
      ...typography,
      ...textfield
    },
    custom: {
      clientsAnimationSpeed: 35
    }
  });
};