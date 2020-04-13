import React from 'react'

import {
    Box,
    Typography,
    Link
} from '@material-ui/core'

import useWindowSize from '../../../hooks/useWindowSize'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    absoluteContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: theme.custom.footerHeight,
        borderTop: `1px solid ${theme.palette.secondaryColor}`
    },
    container: {
        width: '100%',
        padding: theme.spacing(0, 3)
    },
    copyrightContainer: {
        paddingRight: theme.spacing(6)
    },
    footerText: {
        fontSize: '0.7rem'
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
    const {width} = useWindowSize()
    return (
        <Box
            display="flex"
            className={classes.absoluteContainer}
        >
            <Box
                display="flex"
                className={classes.container}
            >
                <Box
                    className={classes.copyrightContainer}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Typography
                        variant="body1"
                        className={classes.footerText}
                        
                    >
                        all right reserved 2020
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Box
                        display="flex"
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
                                {width >= 600 ? 'facebook' : 'Fa'}
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
                                {width >= 600 ? 'linkedin' : 'Li'}
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
                                {width >= 600 ? 'Instagram' : 'In'}
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}