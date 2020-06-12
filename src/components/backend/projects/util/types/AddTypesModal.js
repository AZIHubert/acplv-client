import React, { useState, useContext } from 'react';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FETCH_TYPES_QUERY } from '../../../../../graphql/querys/index';

import { AuthContext } from '../../../../../context/AuthContext';

import CustomModal from '../../../util/CustomModal';
import Form from '../../../util/Form';
import CustomTextField from '../../../util/CustomTextField';

import {withRouter} from 'react-router-dom';

import { Typography, Box } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    titleContainer: {
        paddingBottom: theme.spacing(4)
    }
}))

export default withRouter(({history, open, handleClose, type, setTypes, errors, setErrors}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const {logout} = useContext(AuthContext);
    const typeId = type ? type._id : '';
    const [title, setTitle] = useState({
        title: type ? type.title :  ''
    });
    const handleChange = e => {
        e.persist();
        setTitle({
            [e.target.name]: e.target.value
        });
    }

    const [createType] = useMutation(CREATE_TYPE_MUTATION, {
        variables: title,
        update(proxy, result){
            const data = proxy.readQuery({
                query: FETCH_TYPES_QUERY
            });
            data.getTypes = [result.data.createType, ...data.getTypes];
            proxy.writeQuery({ query: FETCH_TYPES_QUERY, data });
            setTypes([...data.getTypes]);
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
    const [editClient] = useMutation(EDIT_TYPE_MUTATION, {
        variables: {typeId, ...title},
        update(){
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

    const handleSubmit = e => {
        e.preventDefault();
        if(typeId){
            editClient();
        } else {
            createType();
        }
    }
    return (
        <CustomModal open={open} handleClose={handleClose}>
            <Box className={classes.titleContainer}>
                <Typography variant="h2">
                    {typeId ? 'Edit' : 'New'} Types
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
    );
});

const CREATE_TYPE_MUTATION = gql`
    mutation createType($title: String!){
        createType(title: $title){
            _id
            title
        }
    }
`;

const EDIT_TYPE_MUTATION = gql`
    mutation editType(
        $typeId: ID!
        $title: String!
    ) {
        editType(typeId: $typeId, title: $title){
            _id
            title
        }
    }
`;