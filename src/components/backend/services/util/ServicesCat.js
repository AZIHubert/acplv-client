import React, { useState, useEffect } from 'react';

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FETCH_SERVICE_CAT_QUERY } from '../../../../graphql/querys/index';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomButton from '../../util/CustomButton';
import ServiceCatColumn from './ServiceCatColumn';
import AddServiceCatModal from './AddServiceCatModal';
import WaitModal from '../../util/WaitModal';

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

    const [errors, setErrors] = useState({
        title: ''
    });

    const [saving, setSaving] = useState(false);
    const [movingService, setMovingService] = useState({
        index: '',
        serviceCatId: '',
        serviceId: ''
    });
    const [movingServiceCat, setMovingServiceCat] = useState({
        index: '',
        serviceCatId: ''
    });

    const [openAdd, setOpenAdd] = useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => {
        setOpenAdd(false);
        setErrors({
            title: ''
        });
    };

    const [moveServiceCat] = useMutation(MOVE_SERVICECAT_MUTATION, {
        variables: { serviceCatId: movingServiceCat.serviceCatId, index: movingServiceCat.index },
        update(proxy, result){
            setSaving(false);
        },
        onError(err){
            setSaving(false);
        }
    });
    const [moveService] = useMutation(MOVE_SERVICE_MUTATION, {
        variables: { serviceId: movingService.serviceId, index: movingService.index , serviceCatId: movingService.serviceCatId},
        update(proxy, result){
            setSaving(false);
        },
        onError(err){
            console.log(err)
            setSaving(false);
        }
    });

    const [serviceCats, setServiceCats] = useState([]);
    const [services, setServices] = useState({})
    
    const {loading, error, data} = useQuery(FETCH_SERVICE_CAT_QUERY);

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
    useEffect(() => {
        if(movingServiceCat.serviceCatId) moveServiceCat();
    }, [movingServiceCat, moveServiceCat]);
    useEffect(() => {
        if(movingService.serviceId) moveService();
    }, [movingService, moveService]);

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
            ]);
            setMovingServiceCat({
                serviceCatId: draggableId,
                index: destination.index
            });
            setSaving(true);
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
                console.log('same')
                
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
            setMovingService({
                index: destination.index,
                serviceCatId: r.destination.droppableId,
                serviceId: draggableId
            });
            setSaving(true);
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
                                            index={index} services={services[serviceCat._id]} setServices={setServices}
                                            setServiceCats={setServiceCats}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </Box>
                            )}
                        </Droppable>
                    ): null}
                <AddServiceCatModal open={openAdd} handleClose={handleCloseAdd} setServiceCats={setServiceCats}
                    errors={errors} setErrors={setErrors} setServices={setServices}
                />
                <WaitModal open={saving} />
            </DragDropContext>
        </SubComponentWrapper>
    )
};

const MOVE_SERVICECAT_MUTATION = gql`
    mutation moveServiceCat(
        $serviceCatId: ID!
        $index: Int!
    ) {
        moveServiceCat(serviceCatId: $serviceCatId, index: $index)
    }
`; 

const MOVE_SERVICE_MUTATION = gql`
    mutation moveService(
        $serviceId: ID!
        $index: Int!
        $serviceCatId: ID!
    ) {
        moveService(serviceId: $serviceId, index: $index, serviceCatId: $serviceCatId)
    }
`;