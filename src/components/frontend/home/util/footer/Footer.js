import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        height: `calc(100vh - ${theme.custom.navbarHeight}px - ${theme.custom.footerHeight}px)`,
        position: 'relative',
    },
    contactContainer: {
        margin: theme.spacing(0, 3)
    },
    contactLink: {
        textStrokeWidth: 0.5,
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
        fontSize: '4.5rem',
        paddingBottom: theme.spacing(3),
        marginBottom: theme.spacing(4),
        position: 'relative',
        '&:after': {
            content: "''",
            backgroundColor: theme.palette.secondaryColor,
            position: 'absolute',
            left: 0,
            right: 0,
            width: 200,
            height: 1,
            bottom: 0,
            margin: '0 auto'
        }
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