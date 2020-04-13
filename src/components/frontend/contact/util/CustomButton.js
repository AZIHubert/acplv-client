import React from 'react'

import {
    Button,
    Box
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    button: {
        width: 90,
        height: 90,
        borderRadius: '50%',
        backgroundColor: theme.palette.tertiaryColor,
        color: theme.palette.primaryColor,
        transformOrigin: 'center',
        transform: 'rotate(-20deg)',
        transition: theme.transitions.create('transform', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
            backgroundColor: theme.palette.tertiaryColor,
            color: theme.palette.primaryColor,
            transform: 'rotate(0deg)',
        }
    }
}))

export default ({text, theme}) => {
    const classes = useStyles(theme)
    return (
        <Box
            textAlign="right"
            className={classes.container}
        >
            <Button
                variant="contained"
                className={classes.button}
                disableRipple
            >
                {text}
            </Button>
        </Box>
    )
}