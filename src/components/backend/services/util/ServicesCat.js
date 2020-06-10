import React, { useState, useEffect } from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomButton from '../../util/CustomButton';
import ServiceCatColumn from './ServiceCatColumn';

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
    
    const {loading, error, data} = useQuery(GET_SERVICE_CAT_QUERY);

    useEffect(() => {
        const onCompleted = data => {
            setServiceCats(data.getServiceCats)
        }
        if (onCompleted) {
            if (onCompleted && !loading && !error) {
              onCompleted(data);
            }
        }
    }, [loading, data, error]);

    return (
        <SubComponentWrapper title='Add/Remove Services and Services Categories'>
                <Box className={classes.buttonContainer}>
                    <CustomButton onClick={handleOpenAdd}>
                        Add Service Categories
                    </CustomButton>
                </Box>
                {!loading ? (
                    <Box>
                        {serviceCats.map((serviceCat, index) => (
                            <ServiceCatColumn serviceCat={serviceCat} key={serviceCat._id} />
                        ))}
                    </Box>
                ): null}
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