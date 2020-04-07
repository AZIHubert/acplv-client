import React, {forwardRef} from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        borderTop: `1px solid ${theme.palette.secondaryColor}`,
        position: 'absolute',
        bottom: 0,
        width: '100%'
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

export default forwardRef((props, ref) => {
    const classes = useStyles(props)
    return (
        <Box
            display="flex"
            className={classes.container}
            ref={ref}
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
    )
})