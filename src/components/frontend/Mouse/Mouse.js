import React, {
    useEffect
} from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';

import {
    useTrail,
    animated
} from 'react-spring';

import { useMediaQuery } from 'react-responsive';

import useMousePosition from '../../../hooks/useMousePosition';

const config = { tension: 300, friction: 30 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
const numOfBubble = 5;

const useStyles = makeStyles(theme => ({
    mouse: {
        backgroundColor: theme.palette.secondaryColor,
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 100,
        width: 10,
        height: 10,
        borderRadius: '50%',
        position: 'fixed',
        top: '0%',
        left: '0%',
        transform: 'translate3d(-50%, -50%, 0)',
        overflow: 'visible'
    },
    subMouseContainer: {
        position: 'fixed',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 100
    },
    subMouse: {
        position: 'fixed',
        backgroundColor: theme.palette.secondaryColor,
        opacity: 0.20,
        borderRadius: '50%',
        mixBlendMode: 'unset',
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme);
    const isMobile = useMediaQuery({ query: '(max-width: 824px)' });
    const {x, y} = useMousePosition();
    const [trail, set] = useTrail(numOfBubble,
        () => ({
            xy: [0, 0],
            config
        })
    );
    useEffect(() => {
        set({ xy: [x, y] });
    }, [x, y, set]);
    return (
        !isMobile &&
            <>
                <div
                    onMouseMove={e => console.log('test')}
                    className={classes.mouse}
                    style={{
                        transform: `translate3d(-50%, -50%, 0) translate3d(${x}px,${y}px,0)`
                    }}
                >
                </div>
                <div
                    className={classes.subMouseContainer}
                >
                    {trail.map((props, index) => (
                        <animated.div 
                            key={index}
                            className={classes.subMouse}
                            style={{
                                transform: props.xy.interpolate(trans),
                                width: map(index, 0, numOfBubble - 1, 35, 25),
                                height: map(index, 0, numOfBubble - 1, 35, 25),
                            }}
                        />
                    ))}
                </div>
            </>
    );
};