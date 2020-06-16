export default (theme) => ({
    MuiTypography: {
        h1: {
            textTransform: 'uppercase',
            [theme.breakpoints.up('1350')]: {
                fontSize: '9rem',
            },
            fontSize: '5rem',
            [theme.breakpoints.down('824')]: {
                fontSize: '3rem',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '2.2rem',
            },
            lineHeight: 1,
            '&::selection': {
                backgroundColor: theme.palette.secondaryColor,
                color: theme.palette.primaryColor
            }
        },
        h2: {
            textTransform: 'uppercase',
            fontSize: '4.5rem',
            color: theme.palette.tertiaryColor,
            '&::selection': {
                backgroundColor: theme.palette.tertiaryColor,
                color: theme.palette.primaryColor
            }
        },
        h3: {
            textTransform: 'uppercase',
            [theme.breakpoints.up('lg')]: {
                fontSize: '3.75rem',
            },
            fontSize: '2.4rem',
            [theme.breakpoints.down('824')]: {
                fontSize: '1.8rem'
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.2rem',
            },
            '&::selection': {
                backgroundColor: theme.palette.secondaryColor,
                color: theme.palette.primaryColor
            },
            
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
        h5: {
            textStrokeWidth: 1,
            textStrokeColor: theme.palette.secondaryColor,
            color: 'transparent',
            display: 'inline-block',
            textTransform: 'uppercase',
            lineHeight: 1.22,
            fontSize: '4rem',
            [theme.breakpoints.down('md')]: {
                fontSize: '3rem',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '2rem',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.5rem',
            },
        },
        body1: {
            fontSize: '2.25rem',
            [theme.breakpoints.down('lg')]: {
                fontSize: '2rem',
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '1.75rem',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.375rem',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '1rem',
            },
            textTransform: 'uppercase',
            '&::selection': {
                backgroundColor: theme.palette.secondaryColor,
                color: theme.palette.primaryColor
            }
        },
        body2: {
            fontSize: '2.25rem',
            [theme.breakpoints.down('lg')]: {
                fontSize: '2rem',
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '1.75rem',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.375rem',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '1rem',
            },
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