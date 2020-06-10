import React, { useState } from 'react';

import DeleteProjectsModal from './DeleteProjectsModal';
import AddProjectsModal from './AddProjectsModal';

import {
    Box,
    Typography,
    Checkbox,
    FormControlLabel,
    Button
} from '@material-ui/core';

import SwapVertIcon from '@material-ui/icons/SwapVert';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1, 4),
        marginBottom: theme.spacing(2),
        border: `1px solid ${theme.palette.tertiaryColor}`,
        borderRadius: 25
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

export default ({project}) => {
    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <Box className={classes.container}
            display="flex" justifyContent="space-between" alignItems="center"
        >
            <Box display="flex" alignItems="center">
                <Typography variant="body2">
                    {project.title}
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
                    control={<Checkbox color="primary" checked={project.display} />}
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
                title={project.title} _id={project._id}
            />
            <AddProjectsModal
                open={openEdit} handleClose={handleCloseEdit}
                project={project}
            />
        </Box>
    )
}