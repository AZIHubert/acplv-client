export default (theme) => ({
  MuiFormLabel: {
    root: {
      color: theme.palette.secondaryColor,
      '&.Mui-focused': {
        color: theme.palette.tertiaryColor
      }
    }
  },
  MuiInputBase: {
    root: {
      color: theme.palette.secondaryColor
    }
  },
  MuiInput: {
    underline: {
      '&:before': {
        borderBottom: `1px solid ${theme.palette.secondaryColor}`
      },
      '&:hover:not(.Mui-disabled):before': {
        borderBottom: `2px solid ${theme.palette.secondaryColor}`
      },
      '&:after': {
        borderBottom: `2px solid ${theme.palette.tertiaryColor}`
      }
    }
  }
})