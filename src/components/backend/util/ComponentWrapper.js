import React from 'react';

import Form from './Form';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
    Box,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: theme.spacing(5)
    },
    titleContainer: {
        padding: theme.spacing(0, 4, 10, 4)
    }
}))

export default ({title, isForm, handleSubmit, children}) => {
    const theme = useTheme()
    const classes = useStyles(theme);
    return (
        <Box className={classes.container}>
            <Box className={classes.titleContainer}>
                <Typography variant="h2">
                    {title}
                </Typography>
            </Box>
            {isForm ? (
                <Form handleSubmit={handleSubmit} paddingButton>
                    {children}
                </Form>
            ) : (
                <Box>
                    {children}
                </Box>
            )}
        </Box>
    );
};