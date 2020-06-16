import React, { useContext, useState } from 'react';

import CustomModal from '../../util/CustomModal';

import { Box, Typography, Button } from '@material-ui/core';

import { AuthContext } from '../../../../context/AuthContext';

import {withRouter} from 'react-router-dom';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FETCH_SERVICE_CAT_QUERY } from '../../../../graphql/querys/index';
import WaitModal from '../../util/WaitModal';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    titleContainer: {
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(4),
        borderBottom: `1px solid ${theme.palette.tertiaryColor}`
    },
    deleteButton: {
        border: `1px solid ${theme.palette.tertiaryColor}`,
        backgroundColor: theme.palette.tertiaryColor,
        padding: theme.spacing(0.5, 3),
        '& p': {
            color: theme.palette.primaryColor
        },
        '&:hover': {
            backgroundColor: theme.palette.primaryColor,
            '& p': {
                color: theme.palette.tertiaryColor
            }
        },
    },
    returnButton: {
        border: `1px solid ${theme.palette.tertiaryColor}`,
        padding: theme.spacing(0.5, 3),
        '&:hover': {
            backgroundColor: theme.palette.tertiaryColor,
            '& p': {
                color: theme.palette.primaryColor
            }
        },
    },
    buttonText: {
        fontSize: '1.2rem',
        transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.short
        })
    }
}));

export default withRouter(({history, open, handleClose, title, _id, setServices, serviceCatId}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [save, setSave] = useState(false);

    const {logout} = useContext(AuthContext);

    const [deleteService] = useMutation(DELETE_SERVICE_MUTATION, {
        variables: {serviceId: _id},
        update(proxy, result){
            const data = proxy.readQuery({
                query: FETCH_SERVICE_CAT_QUERY
            });
            const newData = data.getServiceCats.map(serviceCat => {
                if(serviceCatId === serviceCat._id){
                    const services = serviceCat.services.filter(service => service._id !== _id);
                    return {
                        ...serviceCat,
                        services
                    }
                }
                return serviceCat;
            })
            proxy.writeQuery({
                query: FETCH_SERVICE_CAT_QUERY,
                data: {getServiceCats: [
                    ...newData
                ]}
            });
            setSave(false);
            handleClose();
        },
        onError(err){
            const error = err.graphQLErrors[0];
            setSave(false);
            if(error.message === "Authorization header must be provided" ||
               error.message === 'Authentication token must be \'Bearer [token]\''){
                    logout();
                    history.push('/login');
            } else {
                handleClose();
                console.log(err);
            }
        }
    });

    return (
        <CustomModal open={open} handleClose={handleClose}>
            <Box>
                <Box className={classes.titleContainer}>
                    <Typography variant="body1">
                        Are you sure you want to delete service "{title}"?
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Button className={classes.deleteButton} onClick={() => {
                        setSave(true);
                        deleteService()
                    }}>
                        <Typography variant="body2" className={classes.buttonText}>
                            delete
                        </Typography>
                    </Button>
                    <Button className={classes.returnButton} onClick={handleClose}>
                        <Typography variant="body2" className={classes.buttonText}>
                            return
                        </Typography>
                    </Button>
                </Box>
            </Box>
            <WaitModal open={save} />
        </CustomModal>
    );
});

const DELETE_SERVICE_MUTATION = gql`
    mutation deleteService(
        $serviceId: ID!
    ) {
        deleteService(serviceId: $serviceId)
    }
`;