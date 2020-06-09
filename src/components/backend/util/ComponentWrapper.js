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
        padding: theme.spacing(0, 8, 10, 8)
    }
}))

export default ({title, isForm, children}) => {
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
                <Form>
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