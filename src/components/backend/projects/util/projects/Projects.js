import React, { useState, useEffect } from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

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
    
    const {loading, error, data} = useQuery(GET_PROJECTS_QUERY);

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
                                    />
                                ))}
                                {provided.placeholder}
                            </Box>
                        )}
                    </Droppable>
                ): null}
            </DragDropContext>
            <AddProjectsModal open={openAdd} handleClose={handleCloseAdd} />
            <WaitModal open={saving} />
        </SubComponentWrapper>
    )
};

const GET_PROJECTS_QUERY = gql`
    {
        getProjects {
            _id
            display
            title
            type {
                _id
            }
        }
    }
`;