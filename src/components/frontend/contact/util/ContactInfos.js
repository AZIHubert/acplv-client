import React from 'react'

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

export default ({
    email,
    phone,
    adressStreet,
    adressCity,
    facebookLink,
    linkedinLink,
    instagramLink,
    theme}) => {
    const classes = useStyles(theme)
    return (
        <>
            {!!phone && (
                <Box
                    className={classes.contactContainer}
                >
                    <Title
                        variant='body2'
                        title='téléphone'
                    />
                    <Title
                        variant='body1'
                        title={phone}
                    />
                </Box>
            )}
            {!!email && (
                <Box
                    className={classes.contactContainer}
                >
                    <Title
                        variant='body1'
                        title='Email'
                        href={`mailto:${email}`}
                    />
                </Box>
            )}
            {(!!adressStreet || !!adressCity) && (
                <Box>
                    <Title
                        variant='body2'
                        title='adresse'
                    />
                    <Title
                        variant='body1'
                        title={adressStreet}
                    />
                    <Title
                        variant='body1'
                        title={adressCity}
                    />
                </Box>
            )}
            {(
                facebookLink ||
                instagramLink ||
                linkedinLink
            ) && (
                <Box
                    className={classes.socialMediaContainer}
                >
                    {facebookLink && (
                        <Title
                            variant='body2'
                            customClass={classes.socialMedia}
                            title='Facebook'
                            href={facebookLink}
                        />
                    )}
                    {linkedinLink && (
                        <Title
                            variant='body2'
                            customClass={classes.socialMedia}
                            title='Linkedin'
                            href={linkedinLink}
                        />
                    )}
                    {instagramLink && (
                        <Title
                            variant='body2'
                            customClass={classes.socialMedia}
                            title='Instagram'
                            href={instagramLink}
                        />
                    )}
                </Box>
            )}
        </>
    );
};