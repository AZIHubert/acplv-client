import React, { useState } from 'react';

import CustomModal from '../../util/CustomModal';
import Form from '../../util/Form';
import CustomTextField from '../../util/CustomTextField';

import { Typography, Box } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    titleContainer: {
        paddingBottom: theme.spacing(4)
    }
}))

export default ({open, handleClose, client}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const clientId = client ? client._id : '';
    const [title, setTitle] = useState({
        title: client ? client.title :  ''
    });
    const handleChange = e => {
        e.persist();
        setTitle({
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(clientId){
            console.log('edite type');
            console.log(title);
        } else {
            console.log('add type');
            console.log(title);
        }
    }
    return (
        <CustomModal open={open} handleClose={handleClose}>
            <Box className={classes.titleContainer}>
                <Typography variant="h2">
                    {clientId ? 'Edit' : 'New'} Clients
                </Typography>
            </Box>
            <Form handleSubmit={handleSubmit}>
                <CustomTextField
                    paddingBottom
                    fullWidth
                    label="Title"
                    name="title"
                    autoFocus
                    value={title.title}
                    handleChange={handleChange}
                />
            </Form>
        </CustomModal>
    )
}