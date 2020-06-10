import React from 'react';

import { Modal, Fade, Box, Typography } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
    },
    fade: {
        width: '90%',
        backgroundColor: theme.palette.primaryColor,
        maxHeight: '90%',
        maxWidth: 1000,
        '&:focus': {
            outline: 'none'
        },
        border: `2px solid ${theme.palette.tertiaryColor}`,
        borderRadius: 25
    },
    text: {
        color: theme.palette.tertiaryColor,
        fontSize: '6rem'
    },
    paper: {
        padding: theme.spacing(3, 5, 4),
    },
}));

export default ({open, handleClose, children}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <Modal
            className={classes.modal}
            open={open}
            closeAfterTransition
        >
            <Fade in={open} className={classes.fade}>
                <div>
                    <Box textAlign="center" className={classes.paper}>
                        <Typography variant="h1" className={classes.text}>
                            Wait for saving changes
                        </Typography>
                    </Box>
                </div>
            </Fade>
        </Modal>
    );
};