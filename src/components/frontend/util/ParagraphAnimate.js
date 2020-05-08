import React, {
    useRef
} from 'react';

import {
    Typography,
    Box
} from '@material-ui/core';

import {
    useSpring,
    animated
} from 'react-spring';

import useOnScreen from '../../../hooks/useOnScreen';

const AnimatedTypography = animated(Typography);
const AnimatedBox = animated(Box);

const config = {
    mass: 5,
    friction: 400,
    tension: 1800
}

export default ({children, variant, customClass}) => {
    const paragraphRef = useRef(null);
    const onScreen = useOnScreen(paragraphRef, "-70px 0px 0px 0px", true);
    const {y,  opacity} = useSpring({
        opacity: onScreen ? 1 : 0.2,
        y: onScreen ? 0 : -10,
        config
    });
    return (
        <Box
            ref={paragraphRef}
        >
            <AnimatedBox
                style={{
                    transform: y.interpolate(y => `translate3d(0px, -${y}px, 0px)`)
                }}
            >
                <AnimatedTypography
                    variant={variant}
                    className={customClass}
                    style={{
                        opacity
                    }}
                >
                    {children}
                </AnimatedTypography>
            </AnimatedBox>
        </Box>
    );
};