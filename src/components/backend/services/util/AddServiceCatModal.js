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
import WaitModal from '../../util/WaitModal';

const useStyles = makeStyles(theme => ({
    titleContainer: {
        paddingBottom: theme.spacing(4)
    }
}))

export default withRouter(({history, open, handleClose, serviceCat, setServiceCats, errors, setErrors, setServices}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    
    const [save, setSave] = useState(false);

    const {logout} = useContext(AuthContext);

    const serviceCatId = serviceCat ? serviceCat._id : '';
    const [title, setTitle] = useState({
        title: serviceCat ? serviceCat.title :  ''
    });

    const [createServiceCat] = useMutation(CREATE_SERVICECAT_MUTATION, {
        variables: title,
        update(proxy, result){
            const data = proxy.readQuery({
                query: FETCH_SERVICE_CAT_QUERY
            });
            proxy.writeQuery({
                query: FETCH_SERVICE_CAT_QUERY,
                data: {getServiceCats: [
                    result.data.createServiceCat,
                    ...data.getServiceCats,
                ]}
            });
            title.title = '';
            setSave(false);
            handleClose();
        },
        onError(err){
            const error = err.graphQLErrors[0];
            setSave(false);
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
    const [editServiceCat] = useMutation(EDIT_SERVICECAT_MUTATION, {
        variables: {serviceCatId, ...title},
        update(_, result){
            setSave(false);
            handleClose();
        },
        onError(err){
            console.log(err)
            const error = err.graphQLErrors[0];
            setSave(false);
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
        setTitle({
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        setSave(true);
        if(serviceCatId){
            editServiceCat();
        } else {
            createServiceCat();
        }
    }
    return (
        <CustomModal open={open} handleClose={handleClose}>
            <Box className={classes.titleContainer}>
                <Typography variant="h2">
                    {serviceCatId ? 'Edit' : 'New' } Service Category
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
            <WaitModal open={save} />
        </CustomModal>
    );
});

const CREATE_SERVICECAT_MUTATION = gql`
    mutation createServiceCat($title: String!){
        createServiceCat(title: $title){
            _id
            title
            services {
                _id
                title
            }
        }
    }
`;

const EDIT_SERVICECAT_MUTATION = gql`
    mutation editServiceCat(
        $serviceCatId: ID!
        $title: String!
    ) {
        editServiceCat(serviceCatId: $serviceCatId, title: $title){
            _id
            title
            services {
                _id
                title
            }
        }
    }
`;