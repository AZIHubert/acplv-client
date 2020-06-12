import React, { useContext } from 'react';

import CustomModal from '../../../util/CustomModal';

import { Box, Typography, Button } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FETCH_PROJECTS_QUERY } from '../../../../../graphql/querys/index';

import {withRouter} from 'react-router-dom';

import { AuthContext } from '../../../../../context/AuthContext';

const useStyles = makeStyles(theme => ({
    titleContainer: {
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(4),
        borderBottom: `1px solid ${theme.palette.tertiaryColor}`
    },
    deleteButton: {
        border: `1px solid ${theme.palette.tertiaryColor}`,
        backgroundColor: theme.palette.tertiaryColor,
        padding: theme.spacing(0.5, 3),
        '& p': {
            color: theme.palette.primaryColor
        },
        '&:hover': {
            backgroundColor: theme.palette.primaryColor,
            '& p': {
                color: theme.palette.tertiaryColor
            }
        },
    },
    returnButton: {
        border: `1px solid ${theme.palette.tertiaryColor}`,
        padding: theme.spacing(0.5, 3),
        '&:hover': {
            backgroundColor: theme.palette.tertiaryColor,
            '& p': {
                color: theme.palette.primaryColor
            }
        },
    },
    buttonText: {
        fontSize: '1.2rem',
        transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.short
        })
    }
}));

export default withRouter(({history, open, handleClose, setProjects, title, projectId, imageId}) => {

    const logout = useContext(AuthContext);

    const [deleteProject] = useMutation(DELETE_PROJECT_MUTATION, {
        variables: {projectId},
        update(proxy, result){
            handleClose();
            const data = proxy.readQuery({
                query: FETCH_PROJECTS_QUERY
            });
            data.getProjects = data.getProjects.filter(project => project._id !== projectId);
            proxy.writeQuery({ query: FETCH_PROJECTS_QUERY, data });
            setProjects([...data.getProjects]);
        },
        onError(err){
            const error = err.graphQLErrors[0];
            if(error.message === "Authorization header must be provided" ||
               error.message === 'Authentication token must be \'Bearer [token]\''){
                    logout();
                    history.push('/login');
            } else {
                handleClose();
                console.log(err);
            }
        }
    });

    const [deleteImage] = useMutation(DELETE_IMAGE_MUTATION, {
        variables: {imageId},
        update(proxy, result){
            deleteProject();
        },
        onError(err){
            const error = err.graphQLErrors[0];
            if(error.message === "Authorization header must be provided" ||
               error.message === 'Authentication token must be \'Bearer [token]\''){
                    logout();
                    history.push('/login');
            } else {
                handleClose();
                console.log(err);
            }
        }
    });

    const handleDelete = () => {
        if(imageId) deleteImage()
        else {
            console.log('project')
            deleteProject();
        }
    }

    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <CustomModal open={open} handleClose={handleClose}>
            <Box>
                <Box className={classes.titleContainer}>
                    <Typography variant="body1">
                        Are you sure you want to delete project "{title}"?
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Button className={classes.deleteButton} onClick={handleDelete}>
                        <Typography variant="body2" className={classes.buttonText}>
                            delete
                        </Typography>
                    </Button>
                    <Button className={classes.returnButton} onClick={handleClose}>
                        <Typography variant="body2" className={classes.buttonText}>
                            return
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </CustomModal>
    );
});

const DELETE_PROJECT_MUTATION = gql`
    mutation deleteProject(
        $projectId: ID!
    ) {
        deleteProject(projectId: $projectId)
    }
`;

const DELETE_IMAGE_MUTATION = gql`
    mutation deleteImage(
        $imageId: ID!
    ) {
        deleteImage(imageId: $imageId)
    }
`;