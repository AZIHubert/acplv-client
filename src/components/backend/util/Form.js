import React from 'react';

import CustomButton from './CustomButton';

import { Box } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    buttonContainer: {
        paddingLeft: theme.spacing(4)
    }
}))

export default ({children, handleSubmit, paddingButton}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <form onSubmit={handleSubmit}>
            {children}
            <Box className={paddingButton && classes.buttonContainer}>
                <CustomButton onClick={handleSubmit}>
                    save
                </CustomButton>
            </Box>
        </form>
    )
}