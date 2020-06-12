import React, { useState, useEffect } from 'react';

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FETCH_CLIENTS_QUERY } from '../../../../graphql/querys/index';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomButton from '../../util/CustomButton';
import SingleClient from './SingleClient';
import AddClientsModal from './AddClientsModal';
import WaitModal from '../../util/WaitModal';

import { Box } from '@material-ui/core';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    buttonContainer: {
        paddingBottom: theme.spacing(4)
    }
}));

export default () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [errors, setErrors] = useState({
        title: ''
    });
    const [moving, setMoving] = useState({
        index: '',
        clientId: ''
    });

    const [openAdd, setOpenAdd] = useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => {
        setOpenAdd(false);
        setErrors({
            title: ''
        })
    };

    const [saving, setSaving] = useState(false);
    const [clients, setClients] = useState([]);

    const {loading, error, data} = useQuery(FETCH_CLIENTS_QUERY);

    useEffect(() => {
        const onCompleted = data => {
            setClients(data.getClients)
        }
        if (onCompleted) {
            if (onCompleted && !loading && !error) {
              onCompleted(data);
            }
        }
    }, [loading, data, error]);

    const [moveClient] = useMutation(MOVE_CLIENT_MUTATION, {
        variables: { clientId: moving.clientId, index: moving.index },
        update(proxy, result){
            setSaving(false);
        },
        onError(err){
            setSaving(false);
        }
    });

    useEffect(() => {
        moveClient();
    }, [moving, moveClient]);

    const onDragEnd = r => {
        const { destination, source, draggableId } = r;
        if(!destination) return;
        if(
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) return;
        const changedProject = clients.find(project => draggableId === project._id);
        const newProjectsId = Array.from(clients);
        newProjectsId.splice(source.index, 1);
        newProjectsId.splice(destination.index, 0, changedProject);
        setClients([
            ...newProjectsId
        ]);
        setMoving({
            clientId: draggableId,
            index: destination.index
        });
        setSaving(true);
    };

    return (
        <SubComponentWrapper title='Add/Remove Client'>
            <DragDropContext
                onDragEnd={onDragEnd}
            >
                <Box className={classes.buttonContainer}>
                    <CustomButton onClick={handleOpenAdd}>
                        Add Client
                    </CustomButton>
                </Box>
                    {!loading ? (
                        <Droppable droppableId="0">
                            {provided => (
                                <Box
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {clients.map((client, index) => (
                                        <SingleClient
                                            key={client._id}
                                            client={client}
                                            index={index}
                                            setClients={setClients}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </Box>
                            )}
                        </Droppable>
                    ): null}
                </DragDropContext>
                <AddClientsModal open={openAdd} handleClose={handleCloseAdd} setClients={setClients}
                    errors={errors} setErrors={setErrors}
                />
                <WaitModal open={saving} />
        </SubComponentWrapper>
    );
};

const MOVE_CLIENT_MUTATION = gql`
    mutation moveClient(
        $clientId: ID!
        $index: Int!
    ) {
        moveClient(clientId: $clientId, index: $index)
    }
`; 