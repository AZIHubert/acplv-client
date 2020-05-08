import React, {
    useRef
} from 'react';

import {
    Box
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

import {
    useSpring,
    animated
} from 'react-spring';

import useOnScreen from '../../../hooks/useOnScreen';

const AnimatedBox = animated(Box);

const config = {
    mass: 4,
    friction: 200,
    tension: 1500
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: 2
    },
    line: {
        height: '100%',
        backgroundColor: theme.palette.secondaryColor
    }
}));

export default ({theme, justifyContent, ...rest}) => {
    const classes = useStyles(theme);
    const lineRef = useRef(null);
    const onScreen = useOnScreen(lineRef, "-70px 0px 0px 0px", true);
    const props = useSpring({
        width: onScreen ? '100%' : '0%',
        opacity: onScreen ? 1 : 0,
        config
    });
    return(
        <Box
            display="flex"
            justifyContent={justifyContent}
            className={classes.container}
            {...rest}
        >
            <AnimatedBox
                className={classes.line}
                ref={lineRef}
                style={props}
            >
            </AnimatedBox>
        </Box>
    );
};