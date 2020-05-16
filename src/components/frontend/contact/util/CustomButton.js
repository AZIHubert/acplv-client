import React from 'react'

import {
    Button,
    Box
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(3),
        paddingRight: theme.spacing(4)
    },
    button: {
        fontSize: '1.5rem',
        width: 150,
        height: 150,
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
            transform: 'rotate(20deg)',
        }
    }
}))

export default ({text, loading, theme}) => {
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
                type="submit"
            >
                {loading ? 'wait' : text}
            </Button>
        </Box>
    )
}