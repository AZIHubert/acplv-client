import React from 'react';

import { Box, Typography, Button } from '@material-ui/core';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SwapVertIcon from '@material-ui/icons/SwapVert';

import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(0, 3),
        border: `1px solid ${theme.palette.secondaryColor}`,
        borderRadius: 50,
        marginBottom: theme.spacing(2)
    },
    editButton: {
        border: `1px solid ${theme.palette.secondaryColor}`,
        marginLeft: theme.spacing(4),
        padding: theme.spacing(0.2, 2),
        '&:hover': {
            backgroundColor: theme.palette.secondaryColor,
            '& p': {
                color: theme.palette.primaryColor
            }
        }
    },
    editButtonText: {
        fontSize: '1.2rem',
        color: theme.palette.secondaryColor,
        transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.short
        })
    },
}));

export default ({service}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center"
            className={classes.container}
        >
            <Box display="flex" alignItems="center">
                <Typography variant="body1">
                    {service.title}
                </Typography>
                <Button disableRipple className={classes.editButton}>
                    <Typography variant="body1" className={classes.editButtonText}>
                        Edit
                    </Typography>
                </Button>
            </Box>
            <Box display="flex">
                <Box>
                    <DeleteOutlineIcon />
                </Box>
                <Box>
                    <SwapVertIcon />
                </Box>
            </Box>
        </Box>
    )
}