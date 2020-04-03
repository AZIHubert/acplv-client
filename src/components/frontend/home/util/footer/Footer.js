import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh',
    },
    contactContainer: {
        margin: theme.spacing(0, 3)
    },
    contactLink: {
        textStrokeWidth: 2,
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
    footerTextContainer: {
        borderTop: `1px solid ${theme.palette.secondaryColor}`
    },
    footerText: {
        padding: theme.spacing(2, 0),
        fontSize: '0.7rem'
    },
    copyright: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        borderRight: `1px solid ${theme.palette.secondaryColor}`
    },
    socialMediaContainer: {
        paddingLeft: theme.spacing(10)
    },
    socialMedia: {
        '&:after': {
            content: "','"
        },
        paddingRight: theme.spacing(1)
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
                <div>
                    <Typography
                        variant="h1"
                    >
                        let's chat
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
                </div>
            </Box>
            <Box
                display="flex"
                className={classes.footerTextContainer}
            >
                <Typography
                    variant="body1"
                    className={`${classes.footerText} ${classes.copyright}`}
                    
                >
                    all right reserved 2020
                </Typography>
                <Box
                    display="flex"
                    className={classes.socialMediaContainer}
                >
                    <Typography
                        variant="body1"
                        className={`${classes.footerText} ${classes.socialMedia}`}
                    >
                        <Link
                            href="https://www.facebook.com/AcPlvCommunicationDeProximite"
                            target="_blank"
                            rel="noreferrer"
                        >
                            facebook
                        </Link>
                    </Typography>
                    <Typography
                        variant="body1"
                        className={`${classes.footerText} ${classes.socialMedia}`}
                    >
                        <Link
                            href="https://www.linkedin.com/in/meesook-souryadhay-1b660240/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            linkedin
                        </Link>
                    </Typography>
                    <Typography
                        variant="body1"
                        className={classes.footerText}
                    >
                        <Link
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            instagram
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}