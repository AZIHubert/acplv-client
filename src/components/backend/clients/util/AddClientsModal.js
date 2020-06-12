import React, { useState, useContext } from 'react';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FETCH_CLIENTS_QUERY } from '../../../../graphql/querys/index';

import { AuthContext } from '../../../../context/AuthContext';

import {withRouter} from 'react-router-dom';

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

export default withRouter(({history, open, handleClose, client, setClients, errors, setErrors}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const {logout} = useContext(AuthContext);
    const clientId = client ? client._id : '';
    const [title, setTitle] = useState({
        title: client ? client.title :  ''
    });

    const [createClient] = useMutation(CREATE_CLIENT_MUTATION, {
        variables: title,
        update(proxy, result){
            const data = proxy.readQuery({
                query: FETCH_CLIENTS_QUERY
            });
            data.getClients = [result.data.createClient, ...data.getClients];
            proxy.writeQuery({ query: FETCH_CLIENTS_QUERY, data });
            setClients([...data.getClients]);
            title.title = '';
            handleClose();
        },
        onError(err){
            const error = err.graphQLErrors[0];
            console.log(error.message === "Authorization header must be provided")
            if(error.extensions.code === "BAD_USER_INPUT"){
                setErrors(error.extensions.exception.errors);
            }
            if(error.message === "Authorization header must be provided" ||
               error.message === 'Authentication token must be \'Bearer [token]\''){
                    logout();
                    history.push('/login');
            }
        }
    });
    const [editClient] = useMutation(EDIT_CLIENT_MUTATION, {
        variables: {clientId, ...title},
        update(_, result){
            title.title = '';
            handleClose();
        },
        onError(err){
            const error = err.graphQLErrors[0];
            console.log(error.message === "Authorization header must be provided")
            if(error.extensions.code === "BAD_USER_INPUT"){
                setErrors(error.extensions.exception.errors);
            }
            if(error.message === "Authorization header must be provided" ||
               error.message === 'Authentication token must be \'Bearer [token]\''){
                    logout();
                    history.push('/login');
            }
        }
    });

    const handleChange = e => {
        e.persist();
        setErrors({
            title: ''
        })
        setTitle({
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(clientId){
            editClient();
        } else {
            createClient();
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
                    error={!!errors.title}
                    helperText={errors.title}
                />
            </Form>
        </CustomModal>
    )
});

const CREATE_CLIENT_MUTATION = gql`
    mutation createClient($title: String!){
        createClient(title: $title){
            _id
            title
        }
    }
`;

const EDIT_CLIENT_MUTATION = gql`
    mutation editClient(
        $clientId: ID!
        $title: String!
    ) {
        editClient(clientId: $clientId, title: $title){
            _id
            title
        }
    }
`;