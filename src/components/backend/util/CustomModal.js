import React from 'react';

import { Modal, Fade, Box, Typography } from '@material-ui/core';

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
        borderRadius: 25
    },
    modal: {
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
    },
    paper: {
        padding: theme.spacing(3, 5, 4),
    },
    crossContainer: {
        padding: theme.spacing(1, 2),
        borderBottom: `1px solid ${theme.palette.tertiaryColor}`,
        width: '100%',
    },
    cross: {
        fontSize: '1.3rem',
        cursor: 'pointer'
    }
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
                <div>
                    <Box textAlign="right" className={classes.crossContainer}>
                        <Box display='inline-block'>
                            <Typography variant="body2" className={classes.cross}
                                onClick={handleClose}
                            >
                                x
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box className={classes.paper}>
                            {children}
                        </Box>
                    </Box>
                </div>
            </Fade>
        </Modal>
    );
};