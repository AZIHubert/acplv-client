import React from 'react';

import { makeStyles, useTheme, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button: {
        padding: theme.spacing(0.5, 4),
        marginLeft: theme.spacing(4),
        fontSize: '1.75rem',
        backgroundColor: theme.palette.tertiaryColor,
        border: `1px solid ${theme.palette.tertiaryColor}`,
        '&:hover': {
            backgroundColor: theme.palette.primaryColor,
            color: theme.palette.tertiaryColor
        }
    }
}));

export default ({children}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <form>
            {children}
            <Button
                disableRipple
                className={classes.button}
            >
                save
            </Button>
        </form>
    )
}