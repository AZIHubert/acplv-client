import React, {Fragment} from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    contactContainer: {
        paddingBottom: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    socialMediaContainer: {
        paddingTop: theme.spacing(10),
        textAlign: 'right',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
    },
    socialMedia: {
        borderBottom: `1px solid ${theme.palette.tertiaryColor}`,
        paddingBottom: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}))

export default ({theme}) => {
    const classes = useStyles(theme)
    return (
        <Fragment>
            <Box
                className={classes.contactContainer}
            >
                <Typography
                    variant='body2'
                >
                    téléphone
                </Typography>
                <Typography
                    variant='body1'
                >
                    +33.08.11.11.11.11
                </Typography>
            </Box>
            <Box
                className={classes.contactContainer}
            >
                <Typography
                    variant='body2'
                >
                    Email
                </Typography>
                <Typography
                    variant='body1'
                >
                    CONTACT@ACPLV.COM
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant='body2'
                >
                    adresse
                </Typography>
                <Typography
                    variant='body1'
                >
                    11 rue de Besançon
                </Typography>
                <Typography
                    variant='body1'
                >
                    75000, Paris
                </Typography>
            </Box>
            <Box
                className={classes.socialMediaContainer}
            >
                <Typography
                    variant='body2'
                    className={classes.socialMedia}
                >
                    Facebook
                </Typography>
                <Typography
                    variant='body2'
                    className={classes.socialMedia}
                >
                    Linkedin
                </Typography>
                <Typography
                    variant='body2'
                >
                    Instagram
                </Typography>
            </Box>
        </Fragment>
    );
};