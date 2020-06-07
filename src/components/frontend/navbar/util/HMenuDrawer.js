import React, { useContext } from 'react';

import { AuthContext } from '../../../../context/AuthContext';

import {
    Box,
    Typography
} from '@material-ui/core';

import {
    NavLink
} from 'react-router-dom';

import {
    makeStyles
} from '@material-ui/core/styles';

import {
    animated
} from 'react-spring'

const AnimatedBox = animated(Box);
const AnimatedTypography = animated(Typography)

const useStyles = makeStyles(theme => ({
    container: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        boxSizing: 'border-box',
        padding: theme.spacing(2),
        top: 0,
        left: 0,
        backgroundColor: theme.palette.primaryColor
    },
    insideContainer: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    crossContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: theme.spacing(1, 2)
    },
    cross: {
        cursor: 'pointer',
        fontSize: '1.3rem',
        '&:hover': {
            color: theme.palette.tertiaryColor
        }
    },
    linksContainer: {
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        listStyle: 'none'
    },
    linkContainer: {
        padding: theme.spacing(1)
    }, 
    animationContainer: {
        overflow: 'hidden'
    },
    link: {
        display: 'block',
        fontSize: '1.5rem',
        [theme.breakpoints.up(360)]: {
            fontSize: '2.5rem'
        },
        '&.active, &:hover': {
            color: theme.palette.tertiaryColor
        },
        transition: theme.transitions.create('color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.complex
        }),
    },
    logout: {
        fontFamily: 'GillSansBold'
    }
}));

export default ({setOpen, animatedProps, theme}) => {
    const classes = useStyles(theme);
    const {user, logout} = useContext(AuthContext);
    const handleClick = () => setOpen(false);
    const {opacity, yBox, yTypography} = animatedProps;
    const logoutAndClose = () => {
        setOpen(false);
        logout();
    }
    return (
        <AnimatedBox
            className={classes.container}
            style={{opacity}}
        >
            <Box
                className={classes.insideContainer}
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <div
                    className={classes.crossContainer}
                >
                    <span
                        onClick={handleClick}
                        className={classes.cross}
                    >
                        x
                    </span>
                </div>
                <ul
                    className={classes.linksContainer}
                >
                    <li
                        className={classes.linkContainer}
                    >
                        <AnimatedBox
                            className={classes.animationContainer}
                            style={{transform: yBox.interpolate(y => `translate3d(0px, ${y}%, 0)`)}}
                        >
                            <AnimatedTypography
                                variant="h4"
                                component={NavLink}
                                to="/"
                                exact
                                onClick={handleClick}
                                className={classes.link}
                                style={{
                                    transform: yTypography.interpolate(y => `translate3d(0px, ${y}%, 0px)`)
                                }}
                            >
                                home
                            </AnimatedTypography>
                        </AnimatedBox>
                    </li>
                    <li
                        className={classes.linkContainer}
                    >
                        <AnimatedBox
                            className={classes.animationContainer}
                            style={{transform: yBox.interpolate(y => `translate3d(0px, ${y}%, 0)`)}}
                        >
                            <AnimatedTypography
                                variant="h4"
                                component={NavLink}
                                to="/about"
                                exact
                                onClick={handleClick}
                                className={classes.link}
                                style={{
                                    transform: yTypography.interpolate(y => `translate3d(0px, ${y}%, 0px)`)
                                }}
                            >
                                à propos
                            </AnimatedTypography>
                        </AnimatedBox>
                    </li>
                    <li
                        className={classes.linkContainer}
                    >
                        <AnimatedBox
                            className={classes.animationContainer}
                            style={{transform: yBox.interpolate(y => `translate3d(0px, ${y}%, 0)`)}}
                        >
                            <AnimatedTypography
                                variant="h4"
                                component={NavLink}
                                to="/projects"
                                exact
                                onClick={handleClick}
                                className={classes.link}
                                style={{
                                    transform: yTypography.interpolate(y => `translate3d(0px, ${y}%, 0px)`)
                                }}
                            >
                                projets
                            </AnimatedTypography>
                        </AnimatedBox>
                    </li>
                    <li
                        className={classes.linkContainer}
                    >
                        <AnimatedBox
                            className={classes.animationContainer}
                            style={{transform: yBox.interpolate(y => `translate3d(0px, ${y}%, 0)`)}}
                        >
                            <AnimatedTypography
                                variant="h4"
                                component={NavLink}
                                to="/contact"
                                exact
                                onClick={handleClick}
                                className={classes.link}
                                style={{
                                    transform: yTypography.interpolate(y => `translate3d(0px, ${y}%, 0px)`)
                                }}
                            >
                                contact
                            </AnimatedTypography>
                        </AnimatedBox>
                    </li>
                    {user && (
                        <>
                            <li
                                className={classes.linkContainer}
                            >
                                <AnimatedBox
                                    className={classes.animationContainer}
                                    style={{transform: yBox.interpolate(y => `translate3d(0px, ${y}%, 0)`)}}
                                >
                                    <AnimatedTypography
                                        variant="h4"
                                        component={NavLink}
                                        to="/backend"
                                        exact
                                        onClick={handleClick}
                                        className={classes.link}
                                        style={{
                                            transform: yTypography.interpolate(y => `translate3d(0px, ${y}%, 0px)`)
                                        }}
                                    >
                                        backend
                                    </AnimatedTypography>
                                </AnimatedBox>
                            </li>
                            <li
                                className={classes.linkContainer}
                            >
                                <AnimatedBox
                                    className={classes.animationContainer}
                                    style={{transform: yBox.interpolate(y => `translate3d(0px, ${y}%, 0)`)}}
                                >
                                    <AnimatedTypography
                                        variant="h4"
                                        onClick={logoutAndClose}
                                        className={`${classes.logout} ${classes.link}`}
                                        style={{
                                            transform: yTypography.interpolate(y => `translate3d(0px, ${y}%, 0px)`)
                                        }}
                                    >
                                        logout
                                    </AnimatedTypography>
                                </AnimatedBox>
                            </li>
                        </>
                    )}
                </ul>
            </Box>
        </AnimatedBox>
    );
};