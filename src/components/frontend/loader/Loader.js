import React from 'react';

import {
    Box,
    Typography
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: theme.palette.tertiaryColor,
        padding: theme.spacing(2),
        boxSizing: 'border-box'
    },
    text: {
        fontSize: '1rem',
        letterSpacing: '0.2rem'
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme)
    return (
        <Box
            className={classes.container}
        >
            <Typography
                variant="body1"
                className={classes.text}
            >
                Loading acplv...
            </Typography>
        </Box>
    );
};
