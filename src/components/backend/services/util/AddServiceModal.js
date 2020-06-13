import React, { useState, useContext } from 'react';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FETCH_SERVICE_CAT_QUERY } from '../../../../graphql/querys/index';

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

export default withRouter(({history, open, serviceCatId, handleClose, service, setServices, errors, setErrors}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const {logout} = useContext(AuthContext);

    const serviceId = service ? service._id : '';
    const [title, setTitle] = useState({
        title: service ? service.title :  ''
    });
    const handleChange = e => {
        e.persist();
        setTitle({
            [e.target.name]: e.target.value
        });
    };

    const [createService] = useMutation(CREATE_SERVICE_MUTATION, {
        variables: {serviceCatId, ...title},
        update(proxy, result){
            const data = proxy.readQuery({
                query: FETCH_SERVICE_CAT_QUERY
            });
            proxy.writeQuery({ query: FETCH_SERVICE_CAT_QUERY, data });
            setServices(prevState => ({
                ...prevState,
                [serviceCatId]: [result.data.createService, ...prevState[serviceCatId]]
            }));
            title.title = '';
            handleClose();
        },
        onError(err){
            console.log(err);
            const error = err.graphQLErrors[0];
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
    const [editService] = useMutation(EDIT_SERVICE_MUTATION, {
        variables: {serviceId, ...title},
        update(_, result){
            handleClose();
        },
        onError(err){
            console.log(err);
            const error = err.graphQLErrors[0];
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

    const handleSubmit = e => {
        e.preventDefault();
        if(serviceId){
            editService();
        } else {
            createService();
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
    );
});

const CREATE_SERVICE_MUTATION = gql`
    mutation createService(
        $title: String!
        $serviceCatId: ID!
    ){
        createService(title: $title, serviceCatId: $serviceCatId){
            _id
            title
            index
        }
    }
`;

const EDIT_SERVICE_MUTATION = gql`
    mutation editService(
        $serviceId: ID!
        $title: String!
    ) {
        editService(serviceId: $serviceId, title: $title){
            _id
            title
            index
        }
    }
`;