export default (theme) => ({
  MuiFormLabel: {
    root: {
      color: theme.palette.secondaryColor,
      '&::selection': {
        background: theme.palette.secondaryColor,
        color: theme.palette.primaryColor
      },
      '&.Mui-focused': {
        color: theme.palette.secondaryColor
      }
    },
  },
  MuiInputBase: {
    root: {
      color: theme.palette.tertiaryColor,
    }
  },
  MuiInput: {
    root: {
      '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: `2px solid ${theme.palette.secondaryColor}`
      }
    },
    underline: {
      '&:before': {
        borderBottom: `1px solid ${theme.palette.secondaryColor}`
      },
      '&:after': {
        borderBottom: `2px solid ${theme.palette.tertiaryColor}`
      }
    }
  }
})