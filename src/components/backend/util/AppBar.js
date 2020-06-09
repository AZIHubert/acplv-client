import React from 'react';
import clsx from 'clsx';

import { Link } from 'react-router-dom';

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: theme.palette.primaryColor,
        borderBottom: `1px solid ${theme.palette.secondaryColor}`
    },
    appBarShift: {
        marginLeft: theme.custom.drawerWidth,
        width: `calc(100% - ${theme.custom.drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    link: {
        color: theme.palette.secondaryColor,
        transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.short
        }),
        '&:hover': {
            color: theme.palette.tertiaryColor
        }
    }
}));

export default ({open, handleDrawerOpen}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <Typography
                        variant="h6" noWrap
                        className={classes.link}
                        component={Link}
                        to="/"
                    >
                        FrontEnd
                    </Typography>
                    <Box>
                        <Typography
                            variant="h6" noWrap
                            className={classes.link}
                            component={Link}
                            to="/"
                        >
                            logout
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};