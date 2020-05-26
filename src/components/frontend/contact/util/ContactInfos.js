import React, {Fragment} from 'react'

import {
    Box
} from '@material-ui/core';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Title from '../../util/Title';

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
        // borderBottom: `1px solid ${theme.palette.tertiaryColor}`,
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
                <Title
                    variant='body2'
                    title='téléphone'
                />
                <Title
                    variant='body1'
                    title='+33.08.11.11.11.11'
                />
            </Box>
            <Box
                className={classes.contactContainer}
            >
                <Title
                    variant='body2'
                    title='Email'
                />
                <Title
                    variant='body1'
                    title='CONTACT@ACPLV.COM'
                    href='mailto:CONTACT@ACPLV.COM'
                />
            </Box>
            <Box>
                <Title
                    variant='body2'
                    title='adresse'
                />
                <Title
                    variant='body1'
                    title='11 rue de Besançon'
                />
                <Title
                    variant='body1'
                    title='75000, Paris'
                />
            </Box>
            <Box
                className={classes.socialMediaContainer}
            >
                <Title
                    variant='body2'
                    customClass={classes.socialMedia}
                    title='Facebook'
                    href="https://www.facebook.com/AcPlvCommunicationDeProximite"
                />
                <Title
                    variant='body2'
                    customClass={classes.socialMedia}
                    title='Linkedin'
                    href="https://www.linkedin.com/in/meesook-souryadhay-1b660240/"
                />
                <Title
                    variant='body2'
                    customClass={classes.socialMedia}
                    title='Instagram'
                    href="https://www.instagram.com/"
                />
            </Box>
        </Fragment>
    );
};