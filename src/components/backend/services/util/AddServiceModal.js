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

export default ({open, handleClose, service}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const serviceId = service ? service._id : '';
    const [title, setTitle] = useState({
        title: service ? service.title :  ''
    });
    const handleChange = e => {
        e.persist();
        setTitle({
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(serviceId){
            console.log('edite Service');
            console.log(title);
        } else {
            console.log('add Service');
            console.log(title);
        }
    }
    return (
        <CustomModal open={open} handleClose={handleClose}>
            <Box className={classes.titleContainer}>
                <Typography variant="h2">
                    {serviceId ? 'Edit' : 'New' } Service
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