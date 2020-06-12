import React, { useState, useContext, useEffect } from 'react';

import DeleteProjectsModal from './DeleteProjectsModal';
import AddProjectsModal from './AddProjectsModal';

import { AuthContext } from '../../../../../context/AuthContext';

import {
    Box,
    Typography,
    Checkbox,
    FormControlLabel,
    Button
} from '@material-ui/core';

import { Draggable } from 'react-beautiful-dnd';

import SwapVertIcon from '@material-ui/icons/SwapVert';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { makeStyles, useTheme } from '@material-ui/core';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1, 4),
        marginBottom: theme.spacing(2),
        border: `1px solid ${theme.palette.tertiaryColor}`,
        borderRadius: 25,
        backgroundColor: theme.palette.primaryColor
    },
    editButton: {
        border: `1px solid ${theme.palette.tertiaryColor}`,
        marginLeft: theme.spacing(4),
        padding: theme.spacing(0.5, 3),
        '&:hover': {
            backgroundColor: theme.palette.tertiaryColor,
            '& p': {
                color: theme.palette.primaryColor
            }
        }
    },
    editButtonText: {
        fontSize: '1.2rem',
        transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.short
        })
    },
    formControlLabel: {
        '& .MuiTypography-root': {
            fontSize: '1.2rem'
        },
        '& .MuiCheckbox-colorPrimary': {
            color: theme.palette.tertiaryColor
        },
        '& .MuiCheckbox-colorPrimary.Mui-checked': {
            color: theme.palette.tertiaryColor
        }
    },
    iconContainer: {
        padding: theme.spacing(2),
        marginLeft: theme.spacing(2),
        cursor: 'pointer'
    },
    icon: {
        color: theme.palette.tertiaryColor,
        fontSize: '2rem'
    }
}));

export default ({history, project, setProjects, index}) => {

    const {logout} = useContext(AuthContext);

    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const [newProject, setNewProject] = useState(project);
    const [saved, setSaved] = useState(false);

    const [errors, setErrors] = useState({
        title: ''
    });

    const [editProject] = useMutation(DISPLAY_PROJECT_MUTATION, {
        variables: {
            projectId: project._id,
            projectInput: {
                title: newProject.title,
                display: newProject.display,
                typeId: newProject.typeId,
                thumbnailId: newProject.thumbnailId
            }
        },
        update(){},
        onError(err){
            const error = err.graphQLErrors[0];
            if(error.message === "Authorization header must be provided" ||
               error.message === 'Authentication token must be \'Bearer [token]\''){
                logout();
                history.push('/login');
            }
        }
    });

    const handleClick = e => {
        setNewProject(prevState => ({
            ...prevState,
            display: e.target.checked
        }));
        setSaved(true);
    };

    useEffect(() => {
        if(saved){
            editProject();
            setSaved(false);
        }
    }, [saved, editProject])

    const theme = useTheme();
    const classes = useStyles(theme);
    
    return (
        <Draggable draggableId={project._id} index={index}>
            {(provided) => (
                <Box className={classes.container}
                    display="flex" justifyContent="space-between" alignItems="center"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Box display="flex" alignItems="center">
                        <Typography variant="body2">
                            {project.title.length > 23 ? `${project.title.substring(0, 20)}...` : project.title}
                        </Typography>
                        <Button disableRipple className={classes.editButton}
                            onClick={handleOpenEdit}
                        >
                            <Typography variant="body2" className={classes.editButtonText}>
                                Edit
                            </Typography>
                        </Button>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <FormControlLabel
                            value="start"
                            control={<Checkbox color="primary" checked={newProject.display} onClick={handleClick} />}
                            label="display"
                            labelPlacement="start"
                            className={classes.formControlLabel}
                        />
                        <Box className={classes.iconContainer}
                            onClick={handleOpenDelete}
                        >
                            <DeleteOutlineIcon className={classes.icon} />
                        </Box>
                        <Box className={classes.iconContainer}>
                            <SwapVertIcon className={classes.icon} />
                        </Box>
                    </Box>
                    <DeleteProjectsModal
                        open={openDelete} handleClose={handleCloseDelete}
                        title={project.title} projectId={project._id}
                        imageId={project.thumbnail ? project.thumbnail._id : null}
                        setProjects={setProjects}
                    />
                    <AddProjectsModal
                        open={openEdit} handleClose={handleCloseEdit}
                        project={project}
                        errors={errors} setErrors={setErrors}
                        setSingleProject={setNewProject}
                    />
                </Box>
            )}
        </Draggable>
    )
};

const DISPLAY_PROJECT_MUTATION = gql`
    mutation editProject(
        $projectId: ID!
        $projectInput: ProjectInput!
    ) {
        editProject(projectId: $projectId, projectInput: $projectInput){
            _id
            display
        }
    }
`;