import React from 'react';

import {
    NavLink
} from 'react-router-dom';

import {
    Box, Typography
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    formContainer: {
        maxWidth: 400,
        margin: theme.spacing(4, 0),
        border: `1px solid ${theme.palette.secondaryColor}`,
        padding: theme.spacing(2)
    },
    returnButton: {
        padding: theme.spacing(1),
        border: `1px solid ${theme.palette.secondaryColor}`,
        '&:hover': {
            backgroundColor: theme.palette.tertiaryColor,
            color: theme.palette.secondaryColor
        }
    }
}));

export default ({handleSubmit, theme, title, children}) => {
    const classes = useStyles(theme);
    return (
        <Box
            display="flex"
            justifyContent="center"
            height='100vh'
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
            >
                <Typography
                    variant="h1"
                >
                    {title}
                </Typography>
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className={classes.formContainer}
                >
                    {children}
                </form>
                <Box
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Box>
                        <Typography
                            variant="h4"
                            component={NavLink}
                            to="/"
                            className={classes.returnButton}
                        >
                            retour
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}