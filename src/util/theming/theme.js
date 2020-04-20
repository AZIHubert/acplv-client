import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import TypographyOverride from './typographyOverride'
import TextfieldOverride from './textfieldOverride'

import GillSansMTProBookTTF from '../../res/fonts/gillSansBook/GillSansMTPro-Book.ttf'
import GillSansMTProBookWoff from '../../res/fonts/gillSansBook/GillSansMTPro-Book.woff'
import GillSansMTProBookWoff2 from '../../res/fonts/gillSansBook/GillSansMTPro-Book.woff2'

const GillSansMTProBook = {
  fontFamily: 'GillSansBook',
  fontDisplay: 'swap',
  src: ` local('GillSansMTPro-Book'),
    local('GillSansMTPro-Book'),
    url(${GillSansMTProBookWoff2}) format('woff2'),
    url(${GillSansMTProBookWoff}) format('woff'),
    url(${GillSansMTProBookTTF}) format('ttf') `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

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
          '@font-face': [
            GillSansMTProBook
          ],
          body: {
            backgroundColor: defaultTheme.palette.primaryColor,
            color: defaultTheme.palette.secondaryColor,
            fontFamily: 'GillSansBook, Arial'
          },
          a: {textDecoration: 'none'}
        }
      },
      ...typography,
      ...textfield
    },
    custom: {
      clientsAnimationSpeed: 35,
      navbarHeight: 70,
      footerHeight: 50
    },
    typography: {
      fontFamily: 'GillSansBook, Arial'
    }
  });
};