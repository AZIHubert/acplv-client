import React, { useState } from 'react';

import CustomModal from '../../util/CustomModal';

import { Box, Typography, Button } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    titleContainer: {
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(4),
        borderBottom: `1px solid ${theme.palette.tertiaryColor}`
    },
    deleteButton: {
        border: `1px solid ${theme.palette.tertiaryColor}`,
        backgroundColor: theme.palette.tertiaryColor,
        padding: theme.spacing(0.5, 3),
        '& p': {
            color: theme.palette.primaryColor
        },
        '&:hover': {
            backgroundColor: theme.palette.primaryColor,
            '& p': {
                color: theme.palette.tertiaryColor
            }
        },
    },
    returnButton: {
        border: `1px solid ${theme.palette.tertiaryColor}`,
        padding: theme.spacing(0.5, 3),
        '&:hover': {
            backgroundColor: theme.palette.tertiaryColor,
            '& p': {
                color: theme.palette.primaryColor
            }
        },
    },
    buttonText: {
        fontSize: '1.2rem',
        transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.short
        })
    }
}));

export default ({open, handleClose, title, _id}) => {

    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <CustomModal open={open} handleClose={handleClose}>
            <Box>
                <Box className={classes.titleContainer}>
                    <Typography variant="body1">
                        Are you sure you want to delete client "{title}"?
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Button className={classes.deleteButton}>
                        <Typography variant="body2" className={classes.buttonText}>
                            delete
                        </Typography>
                    </Button>
                    <Button className={classes.returnButton} onClick={handleClose}>
                        <Typography variant="body2" className={classes.buttonText}>
                            return
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </CustomModal>
    );
};