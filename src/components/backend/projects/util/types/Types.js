import React, { useState } from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import SubComponentWrapper from '../../../util/SubComponentWrapper';
import CustomButton from '../../../util/CustomButton';
import SingleTypes from './SingleTypes';
import AddTypesModal from './AddTypesModal';

import { Box } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    typesContainer: {
        margin: theme.spacing(0, -2)
    }
}));

export default () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const {loading, data} = useQuery(FETCH_TYPES_QUERY);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <SubComponentWrapper title="Add/Remove Types" borderbottom>
            <Box display="flex" flexWrap="wrap"
                className={classes.typesContainer}
            >
                {!loading ? (
                    data.getTypes.map(types => (
                        <SingleTypes id={types._id} title={types.title} key={types._id} />
                    ))
                ) : null}
            </Box>
            <Box >
                <CustomButton onClick={handleOpen}>
                    Add Type
                </CustomButton>
            </Box>
            <AddTypesModal open={open} handleClose={handleClose} />
        </SubComponentWrapper>
    );
};

const FETCH_TYPES_QUERY = gql` 
    {
        getTypes {
            _id
            title
        }
    }
`;