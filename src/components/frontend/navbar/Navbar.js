import React from 'react'

import {NavLink, Link} from 'react-router-dom'

import {
    Box,
    Typography
} from '@material-ui/core'

import useWindowSize from '../../../hooks/useWindowSize'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    fixedContainer: {
        position: 'fixed',
        zIndex: 100,
        width: '100%',
        top: 0,
        height: theme.custom.navbarHeight
    },
    container: {
        backgroundColor: theme.palette.primaryColor,
        margin: theme.spacing(0, 6),
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(0, 1)
        },
        height: '100%',
        borderBottom: `2px solid ${theme.palette.tertiaryColor}`
    },
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
}))

export default (theme) => {
    const classes = useStyles(theme)
    const {width} = useWindowSize()
    return (
        <div className={classes.fixedContainer}>
            <Box
                display="flex"
                className={classes.container}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Typography
                        variant="h4"
                        component={Link}
                        to="/"
                    >
                        acplv
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    flexGrow={1}
                    justifyContent="flex-end"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                    >
                        {width >= 600 ?
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
                                    projects
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component={NavLink}
                                    to="/contact"
                                    className={classes.menuItem}
                                >
                                    contact
                                </Typography>
                            </Box>
                        :
                            <Box>
                                <Typography
                                    variant="h4"
                                    className={classes.menuItem}
                                >
                                    HMenu
                                </Typography>
                            </Box>
                        }
                    </Box>
                </Box>
            </Box>
        </div>
    )
}