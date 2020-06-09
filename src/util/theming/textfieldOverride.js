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
  },
  MuiOutlinedInput: {
    root: {
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.secondaryColor
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.tertiaryColor
      }
    },
    notchedOutline: {
      borderColor: theme.palette.secondaryColor,
      '&:hover': {
      }
    },
    input: {
      fontSize: '2rem'
    },
    inputMultiline: {
      lineHeight: '2rem'
    }
  },
  MuiInputLabel: {
    outlined: {
      fontSize: '2rem'
    },
    shrink: {
      fontSize: '1rem !important'
    }
  }
})