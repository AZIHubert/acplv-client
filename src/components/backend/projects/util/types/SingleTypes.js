import React, { useState } from 'react';

import AddTypesModal from './AddTypesModal';
import DeleteTypesModal from './DeleteTypesModal';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Box, Typography } from '@material-ui/core';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles(theme => ({
    container: {
        border: `1px solid ${theme.palette.tertiaryColor}`,
        borderRadius: 25,
        margin: theme.spacing(0, 2, 2, 2)
    },
    titleContainer: {
        padding: theme.spacing(1, 3),
        borderRight: `1px solid ${theme.palette.tertiaryColor}`,
        cursor: 'pointer'
    },
    deleteContainer: {
        padding: theme.spacing(2),
        cursor: 'pointer',
    },
    deleteIcon: {
        color: theme.palette.tertiaryColor
    }
}));

export default ({type}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);
    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);
    return (
        <Box className={classes.container}
            display="flex" alignItems="stretch"
        >
            <Box className={classes.titleContainer} onClick={handleOpenEdit}>
                <Typography variant="body2">
                    {type.title}
                </Typography>
            </Box>
            <Box className={classes.deleteContainer} display="flex" alignItems="center"
                onClick={handleOpenDelete}
            >
                <DeleteOutlineIcon className={classes.deleteIcon} />
            </Box>
            <AddTypesModal type={type} open={openEdit} handleClose={handleCloseEdit} />
            <DeleteTypesModal open={openDelete} handleClose={handleCloseDelete}
                title={type.title} _id={type._id}
            />
        </Box>
    )
}