import React from 'react';

import { Modal, Fade } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fade: {
        width: '90%',
        backgroundColor: theme.palette.primaryColor,
        maxHeight: '90%',
        maxWidth: 800,
        overflowY: 'auto',
        '&:focus': {
            outline: 'none'
        },
        border: `2px solid ${theme.palette.tertiaryColor}`,
        padding: theme.spacing(3, 5, 4),
    },
    modal: {
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none'
    },
    paper: {
        width: '100%'
    },
}));

export default ({open, handleClose, children}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
        >
            <Fade in={open} className={classes.fade}>
                <div className={classes.paper}>
                    {children}
                </div>
            </Fade>
        </Modal>
    );
};