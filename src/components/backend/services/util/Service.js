import React, { useState } from 'react';

import AddServiceModal from './AddServiceModal';
import RemoveServiceModal from './RemoveServiceModal';

import { Box, Typography, Button } from '@material-ui/core';

import { Draggable } from 'react-beautiful-dnd';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SwapVertIcon from '@material-ui/icons/SwapVert';

import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(0, 3),
        border: `1px solid ${theme.palette.secondaryColor}`,
        borderRadius: 50,
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.primaryColor
    },
    editButton: {
        border: `1px solid ${theme.palette.secondaryColor}`,
        marginLeft: theme.spacing(4),
        padding: theme.spacing(0.2, 2),
        '&:hover': {
            backgroundColor: theme.palette.secondaryColor,
            '& p': {
                color: theme.palette.primaryColor
            }
        }
    },
    editButtonText: {
        fontSize: '1.2rem',
        color: theme.palette.secondaryColor,
        transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.short
        })
    },
    deleteIconContainer:{
        cursor: 'pointer',
        borderRight: `1px solid ${theme.palette.secondaryColor}`,
        borderLeft: `1px solid ${theme.palette.secondaryColor}`,
        padding: theme.spacing(0, 1.5)
    },
    swapIconContainer: {
        cursor: 'pointer',
        paddingLeft: theme.spacing(1.5)
    }
}));

export default ({service, index, setServices, serviceCatId}) => {

    const theme = useTheme();
    const classes = useStyles(theme);

    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete  = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    return (
        <Draggable draggableId={service._id} index={index}>
            {provided => (
                <Box display="flex" justifyContent="space-between" alignItems="stretch"
                    className={classes.container}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Box display="flex" alignItems="center">
                        <Typography variant="body1">
                            {service.title}
                        </Typography>
                        <Button disableRipple className={classes.editButton} onClick={handleOpenEdit}>
                            <Typography variant="body1" className={classes.editButtonText}>
                                Edit
                            </Typography>
                        </Button>
                    </Box>
                    <Box display="flex">
                        <Box onClick={handleOpenDelete} display="flex" alignItems="center"
                            className={classes.deleteIconContainer}
                        >
                            <DeleteOutlineIcon />
                        </Box>
                        <Box className={classes.swapIconContainer} display="flex" alignItems="center">
                            <SwapVertIcon />
                        </Box>
                    </Box>
                    <AddServiceModal open={openEdit} handleClose={handleCloseEdit} service={service} />
                    <RemoveServiceModal open={openDelete} handleClose={handleCloseDelete}
                        title={service.title} _id={service._id}
                        setServices={setServices} serviceCatId={serviceCatId}
                    />
                </Box>
            )}
        </Draggable>
    )
}