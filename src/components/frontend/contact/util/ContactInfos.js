import React from 'react'

import {
    Box,
    Typography
} from '@material-ui/core';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Title from '../../util/Title';

const useStyles = makeStyles(theme => ({
    titleContainer: {
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(3),
        borderBottom: `2px solid ${theme.palette.tertiaryColor}`
    },
    title: {
        [theme.breakpoints.down('lg')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '2.75rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.25rem'
        }
    },
    infoContainer: {
        paddingBottom: theme.spacing(6),
        borderBottom: `1px solid ${theme.palette.tertiaryColor}`
    },
    contactContainer: {
        paddingBottom: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    email: {
        '& a': {
            transition: theme.transitions.create('color', {
                duration: theme.transitions.duration.shorter,
                easing: theme.transitions.easing.easeInOut
            }),
            '&:hover': {
                color: theme.palette.tertiaryColor,
            }
        }
    },
    socialMediaContainer: {
        paddingTop: theme.spacing(6),
        borderTop: `2px solid ${theme.palette.tertiaryColor}`,
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
        <Box >
            <Box className={classes.titleContainer} textAlign="center">
                <Typography variant="h2" className={classes.title}>
                    Contact
                </Typography>
            </Box>
            <Box className={classes.infoContainer}>
                {!!phone && (
                    <Box
                        // textAlign="center"
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
                            title='Adresse Email'
                            href={`mailto:${email}`}
                            className={classes.email}
                        />
                    </Box>
                )}
                {(!!adressStreet || !!adressCity) && (
                    <Box >
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
            </Box>
            {(
                facebookLink ||
                instagramLink ||
                linkedinLink
            ) && (
                <Box
                    textAlign="center"
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
        </Box>
    );
};