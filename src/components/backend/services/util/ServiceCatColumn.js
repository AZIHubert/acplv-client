import React from 'react';

import Service from './Service';

import { Box, Typography, Button } from '@material-ui/core';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SwapVertIcon from '@material-ui/icons/SwapVert';

import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        border: `1px solid ${theme.palette.tertiaryColor}`,
        marginBottom: theme.spacing(4),
        borderRadius: 25,
        height: 'auto'
    },
    serviceCatContainer: {
        padding: theme.spacing(0, 2),
        borderBottom: `1px solid ${theme.palette.tertiaryColor}`
    },
    serviceCatTitleContainer: {
        padding: theme.spacing(1, 2, 1, 0),
        borderRight: `1px solid ${theme.palette.tertiaryColor}`,
        cursor: 'pointer'
    },
    editButton: {
        border: `1px solid ${theme.palette.tertiaryColor}`,
        marginLeft: theme.spacing(4),
        padding: theme.spacing(0.2, 3),
        '&:hover': {
            backgroundColor: theme.palette.tertiaryColor,
            '& p': {
                color: theme.palette.primaryColor
            }
        }
    },
    editButtonText: {
        fontSize: '1.4rem',
        transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.short
        })
    },
    deleteIconContainer: {
        padding: theme.spacing(2, 2, 2, 2),
        cursor: 'pointer',
        borderRight: `1px solid ${theme.palette.tertiaryColor}`
    },
    deleteIcon: {
        color: theme.palette.tertiaryColor,
        fontSize: '2rem',
    },
    swapIconContainer: {
        padding: theme.spacing(2, 0, 2, 2),
        cursor: 'pointer'
    },
    swapIcon: {
        color: theme.palette.tertiaryColor,
        fontSize: '2rem'
    },
    servicesContainer: {
        padding: theme.spacing(2)
    },
    addServiceButtonContainer: {
        padding: theme.spacing(3, 2)
    },
    addServiceButton: {
        background: theme.palette.tertiaryColor,
        border: `1px solid ${theme.palette.tertiaryColor}`,
        borderRadius: 25,
        padding: theme.spacing(1, 3),
        '& p': {
            fontSize: '1.5rem'
        },
        '&:hover': {
            '& p': {
                color: theme.palette.tertiaryColor
            }
        }
    }
}))

export default ({serviceCat}) => {

    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Box className={classes.container}>
            <Box className={classes.serviceCatContainer}
                display='Flex' alignItems="stretch"
            >
                <Box className={classes.serviceCatTitleContainer}
                    flexGrow="2"
                    display="flex"
                >
                    <Typography variant="body2">
                        {serviceCat.title}
                    </Typography>
                    <Button disableRipple className={classes.editButton}>
                        <Typography variant="body2" className={classes.editButtonText}>
                            Edit
                        </Typography>
                    </Button>
                </Box>
                <Box display="flex">
                    <Box className={classes.deleteIconContainer}
                        display="flex" alignItems="center"
                    >
                        <DeleteOutlineIcon className={classes.deleteIcon} />
                    </Box>
                    <Box className={classes.swapIconContainer}
                        display="flex" alignItems="center"
                    >
                        <SwapVertIcon className={classes.swapIcon} />
                    </Box>
                </Box>
            </Box>
            <Box className={classes.servicesContainer}>
                {serviceCat.services.map(service => (
                    <Service service={service} key={service._id}>
                        {service.title}
                    </Service>
                ))}
            </Box>
            <Box textAlign="right" className={classes.addServiceButtonContainer}>
                <Button className={classes.addServiceButton}>
                    <Typography variant="body1">
                        Add Service
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}