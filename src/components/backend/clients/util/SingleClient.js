import React, { useState } from 'react';

import DeleteClientsModal from './DeleteClientsModal';
import AddClientsModal from './AddClientsModal';

import {
    Box,
    Typography,
    Button
} from '@material-ui/core';

import { Draggable } from 'react-beautiful-dnd';

import SwapVertIcon from '@material-ui/icons/SwapVert';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { makeStyles, useTheme } from '@material-ui/core';

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

export default ({client, index, setClients}) => {

    const [errors, setErrors] = useState({
        title: ''
    });

    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Draggable draggableId={client._id} index={index}>
            {provided => (
                <Box className={classes.container}
                    display="flex" justifyContent="space-between" alignItems="center"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Box display="flex" alignItems="center">
                        <Typography variant="body2">
                            {client.title}
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
                        
                        <Box className={classes.iconContainer}
                            onClick={handleOpenDelete}
                        >
                            <DeleteOutlineIcon className={classes.icon} />
                        </Box>
                        <Box className={classes.iconContainer}>
                            <SwapVertIcon className={classes.icon} />
                        </Box>
                    </Box>
                    <DeleteClientsModal
                        open={openDelete} handleClose={handleCloseDelete}
                        title={client.title} _id={client._id}
                        setClients={setClients}
                    />
                    <AddClientsModal
                        open={openEdit} handleClose={handleCloseEdit}
                        client={client}
                        setErrors={setErrors}
                        errors={errors}
                    />
                </Box>
            )}
        </Draggable>
    )
}