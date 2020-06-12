import React, { useState, useEffect } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { FETCH_TYPES_QUERY } from '../../../../../graphql/querys';

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
    const {loading, data, error} = useQuery(FETCH_TYPES_QUERY);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [types, setTypes] = useState([]);

    const [errors, setErrors] = useState({
        title: ''
    });

    useEffect(() => {
        const onCompleted = data => {
            setTypes(data.getTypes)
        }
        if (onCompleted) {
            if (onCompleted && !loading && !error) {
              onCompleted(data);
            }
        }
    }, [loading, data, error]);

    return (
        <SubComponentWrapper title="Add/Remove Types" borderbottom>
            <Box display="flex" flexWrap="wrap"
                className={classes.typesContainer}
            >
                {!loading ? (
                    types.map(type => (
                        <SingleTypes type={type} id={type._id} title={type.title} key={type._id}
                            setTypes={setTypes}
                        />
                    ))
                ) : null}
            </Box>
            <Box >
                <CustomButton onClick={handleOpen}>
                    Add Type
                </CustomButton>
            </Box>
            <AddTypesModal open={open} handleClose={handleClose}
                setTypes={setTypes} errors={errors} setErrors={setErrors}
            />
        </SubComponentWrapper>
    );
};