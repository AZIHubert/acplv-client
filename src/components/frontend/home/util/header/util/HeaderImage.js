import React from 'react';

import {
    Box
} from '@material-ui/core';

import {
    makeStyles 
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    imageContainer: {
        marginTop: '-10rem',
        maxHeight: '100vh',
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme);
    return (
        <Box
            display="flex"
            justifyContent="center"
            className={classes.imageContainer}
        >
            <img
                src="https://dummyimage.com/500x700/757575/000000&text=Header+Image"
            />
        </Box>
    )
}