import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh',
        position: 'relative',
    },
    contactContainer: {
        margin: theme.spacing(0, 3)
    },
    contactLink: {
        textStrokeWidth: 0.5,
        fontSize: '5rem',
        textStrokeColor: theme.palette.secondaryColor,
        color: 'transparent',
        transition: theme.transitions.create('text-stroke-color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
            color: 'transparent',
            textStrokeColor: theme.palette.tertiaryColor,
        }
    },
    letsChatText: {
        paddingBottom: theme.spacing(3)
    }
}))

export default ({theme}) => {
    const classes = useStyles(theme)
    return (
        <Box
            className={classes.container}
            display="flex"
            flexDirection="column"
        >
            <Box
                flexGrow={1}
                className={classes.contactContainer}
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Box textAlign="center">
                    <Typography
                        variant="h1"
                        className={classes.letsChatText}
                    >
                        let's chat!
                    </Typography>
                    <Typography
                        variant="h1"
                    >
                        <Link
                            href="mailto:contact@acplv.com"
                            className={classes.contactLink}
                        >
                            contact@acplv.com
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}