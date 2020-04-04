export default (theme) => ({
    MuiTextField: {
        root: {
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.standard
          }),
          '&:hover .MuiInputLabel-shrink:not(.Mui-disabled)': {
            color: theme.palette.tertiaryColor
          },
          '&:hover .MuiFormLabel-root:not(.Mui-disabled)': {
            color: theme.palette.tertiaryColor
          },
          '&:hover .MuiInputBase-root:not(.Mui-disabled)': {
          color: theme.palette.tertiaryColor
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.tertiaryColor
          }
        }
      },
      MuiFormLabel: {
        root: {
          color: theme.palette.tertiaryColor
        }
      },
      MuiOutlinedInput: {
        root: {
          background: theme.palette.primaryColor,
          borderRadius: 0,
          '&$focused $notchedOutline': {
            borderColor: theme.palette.tertiaryColor
          },
          "&$disabled $notchedOutline": {
            borderColor: theme.palette.tertiaryColor
          }
        },
        notchedOutline: {
          borderColor: theme.palette.tertiaryColor
        },
      },
      
      MuiInputLabel: {
        root: {
          '&$focused': {
            color: theme.palette.tertiaryColor
          },
        },
        shrink: {
          color: theme.palette.tertiaryColor,
          '&::selection': {
            background: theme.palette.tertiaryColor,
            color: theme.palette.primaryColor
          }
        },
        formControl: {
          '&::selection': {
            background: theme.palette.tertiaryColor,
            color: theme.palette.secondaryColor
          }
        }
      },
      MuiInputBase: {
        root: {
          color: theme.palette.tertiaryColor,
          '&$focused': {
            color: theme.palette.tertiaryColor
          }
        },
        input: {
          '&::selection': {
            background: theme.palette.secondaryColor,
            color: theme.palette.primaryColor
          },
          '&:disabled': {
              color: theme.palette.tertiaryColor
          }
        },
        formControl: {
          '&.Mui-disabled': {
            opacity: 0.333
          }
        }
    }
})