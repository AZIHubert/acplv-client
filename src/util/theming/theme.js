import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import TypographyOverride from './typographyOverride'
import TextfieldOverride from './textfieldOverride'

import GillSansStdTTF from '../../res/fonts/gillSansBook/GillSansStd.ttf'
import GillSansStdWoff from '../../res/fonts/gillSansBook/GillSansStd.woff'
import GillSansStdWoff2 from '../../res/fonts/gillSansBook/GillSansStd.woff2'

import GillSansStdBoldTTF from '../../res/fonts/gillSansBold/GillSansStd-Bold.ttf'
import GillSansStdBoldWoff from '../../res/fonts/gillSansBold/GillSansStd-Bold.woff'
import GillSansStdBoldWoff2 from '../../res/fonts/gillSansBold/GillSansStd-Bold.woff2'

const GillSansStd = {
  fontFamily: 'GillSans',
  fontDisplay: 'swap',
  src: ` local('GillSansStd'),
    local('GillSansStd'),
    url(${GillSansStdWoff2}) format('woff2'),
    url(${GillSansStdWoff}) format('woff'),
    url(${GillSansStdTTF}) format('ttf') `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

const GillSansStdBold = {
  fontFamily: 'GillSansBold',
  fontDisplay: 'swap',
  src: ` local('GillSansStd-Bold'),
    local('GillSansStd-Bold'),
    url(${GillSansStdBoldWoff2}) format('woff2'),
    url(${GillSansStdBoldWoff}) format('woff'),
    url(${GillSansStdBoldTTF}) format('ttf') `,
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
            GillSansStd,
            GillSansStdBold
          ],
          body: {
            backgroundColor: defaultTheme.palette.primaryColor,
            color: defaultTheme.palette.secondaryColor,
            fontFamily: 'GillSans, Arial',
            overflowX: 'hidden'
          },
          html: {
            [defaultTheme.breakpoints.up('824')]: {
              cursor: 'none'
            },
            overflowX: 'hidden',
          },
          a: {
            textDecoration: 'none',
            [defaultTheme.breakpoints.up('824')]: {
              cursor: 'none'
            },
          }
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
      fontFamily: 'GillSans, Arial'
    }
  });
};