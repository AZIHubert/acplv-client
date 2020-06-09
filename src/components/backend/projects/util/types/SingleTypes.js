import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Box, Typography } from '@material-ui/core';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles(theme => ({
    container: {
        border: `1px solid ${theme.palette.tertiaryColor}`,
        borderRadius: 5,
        margin: theme.spacing(0, 2, 2, 2)
    },
    titleContainer: {
        padding: theme.spacing(1, 3),
        borderRight: `1px solid ${theme.palette.tertiaryColor}`,
    },
    deleteContainer: {
        padding: theme.spacing(2),
        cursor: 'pointer',
    },
    deleteIcon: {
        color: theme.palette.tertiaryColor
    }
}));

export default ({title}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <Box className={classes.container}
            display="flex" alignItems="stretch"
        >
            <Box className={classes.titleContainer}>
                <Typography variant="body2">
                    {title}
                </Typography>
            </Box>
            <Box className={classes.deleteContainer} display="flex" alignItems="center">
                <DeleteOutlineIcon className={classes.deleteIcon} />
            </Box>
        </Box>
    )
}