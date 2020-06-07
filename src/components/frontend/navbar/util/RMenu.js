import React, { useContext } from 'react';

import { AuthContext } from '../../../../context/AuthContext';

import {
    NavLink
} from 'react-router-dom';

import {
    Box,
    Typography,
    Link
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    menuItem: {
        paddingLeft: theme.spacing(3),
        transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest
        }),
        '&:hover::selection': {
            backgroundColor: theme.palette.tertiaryColor,
            color: theme.palette.primaryColor
        },
        '&.active': {
            color: theme.palette.tertiaryColor,
            '&::selection': {
                backgroundColor: theme.palette.tertiaryColor,
                color: theme.palette.primaryColor
            },
        }
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme);
    const {user, logout} = useContext(AuthContext);
    return (
        <Box>
            <Typography
                variant="h4"
                component={NavLink}
                to="/"
                exact
                className={classes.menuItem}
            >
                home
            </Typography>
            <Typography
                variant="h4"
                component={NavLink}
                to="/about"
                className={classes.menuItem}
            >
                à propos
            </Typography>
            <Typography
                variant="h4"
                component={NavLink}
                to="/projects"
                className={classes.menuItem}
            >
                projets
            </Typography>
            <Typography
                variant="h4"
                component={NavLink}
                to="/contact"
                className={classes.menuItem}
            >
                contact
            </Typography>
            {user && (
                <>
                    <Typography
                        variant="h4"
                        component={NavLink}
                        to="/backend"
                        className={classes.menuItem}
                    >
                        backend
                    </Typography>
                    <Typography
                        variant="h4"
                        component={Link}
                        onClick={logout}
                        className={classes.menuItem}
                    >
                        logout
                    </Typography>
                </>
            )}
        </Box>
    )
}