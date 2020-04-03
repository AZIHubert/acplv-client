export default (theme) => ({
    MuiTypography: {
        h1: {
            textTransform: 'uppercase',
            fontSize: '4.4rem',
            lineHeight: 1,
            '&::selection': {
                backgroundColor: theme.palette.secondaryColor,
                color: theme.palette.primaryColor
            }
        },
        h2: {
            textTransform: 'uppercase',
            fontSize: '2rem',
            color: theme.palette.tertiaryColor,
            '&::selection': {
                backgroundColor: theme.palette.tertiaryColor,
                color: theme.palette.primaryColor
            }
        },
        h3: {
            textTransform: 'uppercase',
            fontSize: '1.7rem',
            '&::selection': {
                backgroundColor: theme.palette.secondaryColor,
                color: theme.palette.primaryColor
            }
        },
        h4: {
            fontSize: '1rem',
            textTransform: 'uppercase',
            color: theme.palette.secondaryColor,
            '&:hover': {
                color: theme.palette.tertiaryColor
            },
            '&::selection': {
                backgroundColor: theme.palette.secondaryColor,
                color: theme.palette.primaryColor
            }
        },
        body1: {
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            '&::selection': {
                backgroundColor: theme.palette.secondaryColor,
                color: theme.palette.primaryColor
            }
        },
        body2: {
            fontSize: '1.2rem',
            color: theme.palette.tertiaryColor,
            textTransform: 'uppercase',
            '&::selection': {
                backgroundColor: theme.palette.tertiaryColor,
                color: theme.palette.primaryColor
            }
        }
    },
    MuiLink: {
        root: {
            color: theme.palette.secondaryColor,
            '&::selection': {
                backgroundColor: theme.palette.secondaryColor,
                color: theme.palette.primaryColor
            },
            '&:hover': {
                color: theme.palette.tertiaryColor,
                '&::selection': {
                    backgroundColor: theme.palette.tertiaryColor,
                    color: theme.palette.primaryColor
                },
            }
        },
        underlineHover: {
            transition: theme.transitions.create('color', {
                easing: theme.transitions.easing.easeIn,
                duration: theme.transitions.duration.shortest
            }),
            '&:hover': {
                textDecoration: 'none'
            }
        }
    }
})