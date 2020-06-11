import React, { useState, useEffect } from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomButton from '../../util/CustomButton';
import ServiceCatColumn from './ServiceCatColumn';
import AddServiceCatModal from './AddServiceCatModal';

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

    const [serviceCats, setServiceCats] = useState([]);
    const [services, setServices] = useState({})
    
    const {loading, error, data} = useQuery(GET_SERVICE_CAT_QUERY);

    useEffect(() => {
        const onCompleted = data => {
            setServiceCats(data.getServiceCats);
            setServices(data.getServiceCats.reduce((acc, item) => {
                acc[item._id] = item.services;
                return acc;
            }, {}));
        }
        if (onCompleted) {
            if (onCompleted && !loading && !error) {
              onCompleted(data);
            }
        }
    }, [loading, data, error]);

    const onDragEnd = r => {
        const { destination, source, draggableId } = r;
        if (!destination)  return;
        const sourceIndex = source.index;
        const destIndex = destination.index;
        if (r.type === "droppableItem") {
            if(
                destination.droppableId === source.droppableId &&
                destination.index === source.index
            ) return;
            const changedServiceCat = serviceCats.find(serviceCat => draggableId === serviceCat._id);
            const newServiceCatsId = Array.from(serviceCats);
            newServiceCatsId.splice(sourceIndex, 1);
            newServiceCatsId.splice(destIndex, 0, changedServiceCat);
            setServiceCats([
                ...newServiceCatsId
            ])
        } else if (r.type === "droppableSubItem") {
            if(
                destination.droppableId === source.droppableId &&
                destination.index === source.index
            ) return;
            const sourceParentId = r.source.droppableId;
            const destParentId = r.destination.droppableId;
            const sourceSubItems = [...services[sourceParentId]];
            const destSubItems = [...services[destParentId]];
            if (sourceParentId === destParentId) {
                const changedService = sourceSubItems.find(service => draggableId === service._id);
                sourceSubItems.splice(sourceIndex, 1);
                sourceSubItems.splice(destIndex, 0, changedService);
                setServices(prevState => ({
                    ...prevState,
                    [sourceParentId]: Array.from(sourceSubItems)
                }));
            } else {
                const changedService = sourceSubItems.find(service => draggableId === service._id);
                sourceSubItems.splice(sourceIndex, 1);
                destSubItems.splice(destIndex, 0, changedService);
                setServices(prevState => ({
                    ...prevState,
                    [sourceParentId]: Array.from(sourceSubItems),
                    [destParentId]: Array.from(destSubItems)
                }));
            }
        }
    };
    return (
        <SubComponentWrapper title='Add/Remove Services and Services Categories'>
            <DragDropContext
                onDragEnd={onDragEnd}
            >
                <Box className={classes.buttonContainer}>
                    <CustomButton onClick={handleOpenAdd}>
                        Add Service Categorie
                    </CustomButton>
                </Box>
                    {!loading ? (
                        <Droppable droppableId='rootDroppable' type="droppableItem">
                            {provided => (
                                <Box
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {serviceCats.map((serviceCat, index) => (
                                        <ServiceCatColumn serviceCat={serviceCat} key={serviceCat._id}
                                            index={index} services={services[serviceCat._id]}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </Box>
                            )}
                        </Droppable>
                    ): null}
                <AddServiceCatModal open={openAdd} handleClose={handleCloseAdd} />
            </DragDropContext>
        </SubComponentWrapper>
    )
};

const GET_SERVICE_CAT_QUERY = gql`
    {
        getServiceCats {
            _id
            title
            services {
                _id
                title
            }
        }
    }
`;