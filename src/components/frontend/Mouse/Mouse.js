import React from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';

import { useMediaQuery } from 'react-responsive';

import useMousePosition from '../../../hooks/useMousePosition';

const useStyles = makeStyles(theme => ({
    mouse: {
        backgroundColor: theme.palette.secondaryColor,
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 100,
        width: 15,
        height: 15,
        borderRadius: '50%',
        position: 'fixed',
        top: '0%',
        left: '0%',
        transform: 'translate3d(-50%, -50%, 0)'
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme);
    const isMobile = useMediaQuery({ query: '(max-width: 824px)' });
    const {x, y} = useMousePosition();
    return (
        !isMobile &&
            <div
                className={classes.mouse}
                style={{
                    top: y,
                    left: x
                }}
            >
            </div>
    );
};