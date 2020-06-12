import React, { useContext } from 'react';

import CustomModal from '../../../util/CustomModal';

import { Box, Typography, Button } from '@material-ui/core';

import { AuthContext } from '../../../../../context/AuthContext';

import {withRouter} from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FETCH_TYPES_QUERY } from '../../../../../graphql/querys/index';

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

export default withRouter(({history, open, handleClose, title, _id, setTypes}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const {logout} = useContext(AuthContext);

    const [deleteType] = useMutation(DELETE_TYPE_MUTATION, {
        variables: {typeId: _id},
        update(proxy, result){
            const data = proxy.readQuery({
                query: FETCH_TYPES_QUERY
            });
            data.getTypes = data.getTypes.filter(type => type._id !== _id);
            proxy.writeQuery({ query: FETCH_TYPES_QUERY, data });
            setTypes([...data.getTypes]);
        },
        onError(err){
            const error = err.graphQLErrors[0];
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
                        Are you sure you want to delete type "{title}"?
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Button className={classes.deleteButton}>
                        <Typography variant="body2" className={classes.buttonText}
                            onClick={() => {
                                handleClose();
                                deleteType();
                            }}
                        >
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
        </CustomModal>
    );
});

const DELETE_TYPE_MUTATION = gql`
    mutation deleteType(
        $typeId: ID!
    ) {
        deleteType(typeId: $typeId)
    }
`;