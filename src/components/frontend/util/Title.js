import React, {
    useRef
} from 'react';

import Line from './Line';

import {
    useSpring,
    animated
} from 'react-spring';

import useOnScreen from '../../../hooks/useOnScreen';

import {
    Box,
    Typography
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

const AnimatedBox = animated(Box);
const AnimatedTypography = animated(Typography);

const config = {
    mass: 5,
    friction: 400,
    tension: 1800
}

const useStyles = makeStyles(theme => ({
    outerContainer: {
        overflow: 'hidden',
    },
    innerContainer: {
        padding: theme.spacing(0.2, 0, 0.3, 0)
    },
    link: {
        color: 'inherit'
    }
}));

export default ({
    title,
    customClass,
    theme,
    lineBottom,
    variant,
    href,
    ...rest
}) => {
    const classes = useStyles(theme);
    const titleRef = useRef(null);
    const onScreen = useOnScreen(titleRef, "-70px 0px 0px 0px", true);
    const {yBox, yTypography,  opacity} = useSpring({
        opacity: onScreen ? 1 : 0.5,
        yBox: onScreen ? 0 : 10,
        yTypography: onScreen ? 0 : 75,
        config
    });
    return (
        <Box
            ref={titleRef}
        >
            <AnimatedBox
                className={classes.outerContainer}
                style={{
                    transform: yBox.interpolate(y => `translate3d(0px, -${y}px, 0px)`)
                }}
            >
                <Box
                    className={classes.innerContainer}
                >
                    <AnimatedTypography
                        variant={variant}
                        className={customClass}
                        style={{
                            opacity,
                            transform: yTypography.interpolate(y => `translate3d(0px, ${y}%, 0px)`)
                        }}
                        {...rest}
                    >
                        {!!href ? (
                            <a
                                href={href}
                                className={classes.link}
                            >
                                {title}
                            </a>
                        ) : <>{title}</>}
                    </AnimatedTypography>
                </Box>
                {lineBottom && <Line />}
            </AnimatedBox>
        </Box>
    );
};