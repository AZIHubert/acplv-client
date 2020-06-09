import React from 'react';

import CustomModal from '../../../util/CustomModal';
import Form from '../../../util/Form';
import CustomTextField from '../../../util/CustomTextField';

import { Typography, Box } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    titleContainer: {
        paddingBottom: theme.spacing(4)
    }
}))

export default ({open, handleClose}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <CustomModal open={open} handleClose={handleClose}>
            <Box className={classes.titleContainer}>
                <Typography variant="h2">
                    New Types
                </Typography>
            </Box>
            <Form>
                <CustomTextField
                    paddingBottom
                    fullWidth
                    label="Title"
                    name="title"
                />
            </Form>
        </CustomModal>
    )
}