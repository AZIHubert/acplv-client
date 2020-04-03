import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default () => {
  const defaultTheme = createMuiTheme({
    palette: {
      "primaryColor": "#000",
      "secondaryColor": "#fff",
      "tertiaryColor": "#e4ac49",
    },
    spacing: 10,
  });

  return createMuiTheme({
    palette: {
      ...defaultTheme.palette
    },
    spacing: defaultTheme.spacing
  });
};