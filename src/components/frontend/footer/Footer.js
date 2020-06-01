import React from 'react'

import {
    Box,
    Typography,
    Link
} from '@material-ui/core'

import {
    makeStyles
} from '@material-ui/core/styles';

import { useMediaQuery } from 'react-responsive';

import {
    useQuery
} from '@apollo/react-hooks';
import {
    FETCH_FOOTER_GENERAL_QUERY
} from '../../../graphql/querys/index';

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
    const classes = useStyles(theme);
    const {loading, data} = useQuery(FETCH_FOOTER_GENERAL_QUERY);
    const isVerticalMobile = useMediaQuery({query: '(max-width: 600px)'});
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
                    {!loading && (
                        <Box
                            display="flex"
                        >
                            {data.getGeneral.facebook.isActive && (
                                <Typography
                                    variant="body1"
                                    className={`${classes.footerText} ${classes.socialMedia}`}
                                >
                                    <Link
                                        href={`${data.getGeneral.facebook.link}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {isVerticalMobile ? 'Fa' : 'facebook'}
                                    </Link>
                                </Typography>
                            )}
                            {data.getGeneral.linkedin.isActive && (
                                <Typography
                                    variant="body1"
                                    className={`${classes.footerText} ${classes.socialMedia}`}
                                >
                                    <Link
                                        href={`${data.getGeneral.linkedin.link}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {isVerticalMobile ? 'Li' : 'LinkedIn'}
                                    </Link>
                                </Typography>
                            )}
                            {data.getGeneral.instagram.isActive && (
                                <Typography
                                    variant="body1"
                                    className={classes.footerText}
                                >
                                    <Link
                                        href={`${data.getGeneral.instagram.link}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {isVerticalMobile ? 'In' : 'Instagram'}
                                    </Link>
                                </Typography>
                            )}
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}