import React, { useState } from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import SubComponentWrapper from '../../../util/SubComponentWrapper';
import CustomButton from '../../../util/CustomButton';
import SingleProject from './SingleProject';
import AddProjectsModal from './AddProjectsModal';

import { Box } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    buttonContainer: {
        paddingBottom: theme.spacing(4)
    }
}))

export default () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const [openAdd, setOpenAdd] = useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    const {loading, data} = useQuery(GET_PROJECTS_QUERY);
    return (
        <SubComponentWrapper title='Add/Remove Projects'>
            <Box className={classes.buttonContainer}>
                <CustomButton onClick={handleOpenAdd}>
                    Add Project
                </CustomButton>
            </Box>
            {!loading ? (
                data.getProjects.map(project => (
                    <SingleProject
                        key={project._id}
                        project={project}
                    />
                ))
            ): null}
            <AddProjectsModal open={openAdd} handleClose={handleCloseAdd} />
        </SubComponentWrapper>
    )
};

const GET_PROJECTS_QUERY = gql`
    {
        getProjects {
            _id
            display
            title
            index
            type {
                _id
            }
        }
    }
`;