import React from 'react';

import { Button } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        padding: theme.spacing(0.5, 4),
        fontSize: '1.75rem',
        backgroundColor: theme.palette.tertiaryColor,
        border: `1px solid ${theme.palette.tertiaryColor}`,
        '&:hover': {
            backgroundColor: theme.palette.primaryColor,
            color: theme.palette.tertiaryColor
        }
    }
}));

export default ({children, ...rest}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <Button
            disableRipple
            className={classes.button}
            {...rest}
        >
            {children}
        </Button>
    );
};