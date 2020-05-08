import React from 'react';

import {
    Box
} from '@material-ui/core';

import {
    makeStyles 
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    imageContainer: {
        marginTop: '-7rem',
        width: '100%',
        height: '110vh',
        [theme.breakpoints.down('sm')]: {
            height: '50vh',
            marginTop: '-1rem',
        },
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("https://dummyimage.com/500x700/757575/000000&text=Header+Image")'
    },
    image: {
        // maxWidth: '100%',
        maxHeight: '100%'
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme);
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems='center'
            className={classes.imageContainer}
        >
        </Box>
    )
}