import React, { useState, useEffect } from 'react';

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FETCH_PROJECTS_QUERY } from '../../../../../graphql/querys/index';

import SubComponentWrapper from '../../../util/SubComponentWrapper';
import CustomButton from '../../../util/CustomButton';
import SingleProject from './SingleProject';
import AddProjectsModal from './AddProjectsModal';
import WaitModal from '../../../util/WaitModal';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { Box } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    buttonContainer: {
        paddingBottom: theme.spacing(4)
    }
}));

export default () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [openAdd, setOpenAdd] = useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    const [saving, setSaving] = useState(false);

    const [projects, setProjects] = useState([]);

    const [errors, setErrors] = useState({
        title: ''
    });
    const [moving, setMoving] = useState({
        projectId: '',
        index: ''
    });
    
    const {loading, error, data} = useQuery(FETCH_PROJECTS_QUERY);

    useEffect(() => {
        const onCompleted = data => {
            setProjects(data.getProjects)
        }
        if (onCompleted) {
            if (onCompleted && !loading && !error) {
              onCompleted(data);
            }
        }
    }, [loading, data, error]);

    const [moveProject] = useMutation(MOVE_PROJECT_MUTATION, {
        variables: { projectId: moving.projectId, index: moving.index },
        update(proxy, result){
            setSaving(false);
        },
        onError(err){
            console.log(err)
            setSaving(false);
        }
    });

    useEffect(() => {
        if(moving.projectId){
            moveProject();
        }
    }, [moving, moveProject]);

    const onDragEnd = r => {
        const { destination, source, draggableId } = r;
        if(!destination) return;
        if(
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) return;
        const changedProject = projects.find(project => draggableId === project._id);
        const newProjectsId = Array.from(projects);
        newProjectsId.splice(source.index, 1);
        newProjectsId.splice(destination.index, 0, changedProject);
        setProjects([
            ...newProjectsId
        ]);
        setMoving({
            projectId: draggableId,
            index: destination.index
        });
        setSaving(true);
    };
    return (
        <SubComponentWrapper title='Add/Remove Projects'>
            <DragDropContext
                onDragEnd={onDragEnd}
            >
                <Box className={classes.buttonContainer}>
                    <CustomButton onClick={handleOpenAdd}>
                        Add Project
                    </CustomButton>
                </Box>
                {!loading ? (
                    <Droppable droppableId="0">
                        {provided => (
                            <Box
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {projects.map((project, index) => (
                                    <SingleProject
                                        key={project._id}
                                        project={project}
                                        index={index}
                                        setProjects={setProjects}
                                    />
                                ))}
                                {provided.placeholder}
                            </Box>
                        )}
                    </Droppable>
                ): null}
            </DragDropContext>
            <AddProjectsModal open={openAdd} handleClose={handleCloseAdd}
                errors={errors} setErrors={setErrors} setProjects={setProjects}
            />
            <WaitModal open={saving} />
        </SubComponentWrapper>
    )
};

const MOVE_PROJECT_MUTATION = gql`
    mutation moveProject(
        $projectId: ID!
        $index: Int!
    ) {
        moveProject(projectId: $projectId, index: $index)
    }
`; 