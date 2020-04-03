export default (theme) => ({
    MuiTextField: {
        root: {
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.standard
          }),
          '&:hover .MuiInputLabel-shrink:not(.Mui-disabled)': {
            color: theme.palette.secondaryColor
          },
          '&:hover .MuiFormLabel-root:not(.Mui-disabled)': {
            color: theme.palette.secondaryColor
          },
          '&:hover .MuiInputBase-root:not(.Mui-disabled)': {
            color: theme.palette.secondaryColor
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
          background: theme.palette.secondaryColor,
          borderRadius: 0,
          '&$focused $notchedOutline': {
            borderColor: theme.palette.secondaryColor
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
            color: theme.palette.secondaryColor
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
            color: theme.palette.primaryColor
          },
          '&.Mui-disabled': {
            opacity: 0.333,
            color: theme.palette.tertiaryColor
          }
        }
      },
      MuiInputBase: {
        root: {
          color: theme.palette.tertiaryColor,
          fontFamily: 'FedraSansStdBold',
          '&$focused': {
            color: theme.palette.secondaryColor
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