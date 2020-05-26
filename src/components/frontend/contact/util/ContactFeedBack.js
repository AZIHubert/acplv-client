import React from 'react';

import {
    Box,
    Typography
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

import {
    animated,
    useTransition
} from 'react-spring';

const AnimatedBox = animated(Box)

const useStyles = makeStyles(theme => ({
    container: {
        zIndex: 99,
        
        
        width: '100%',
    },
    crossContainer: {
        padding: theme.spacing(0, 1, 1, 1),
        borderBottom: `2px solid ${theme.palette.tertiaryColor}`,
    },
    cross: {
        animation: 'color 20ms ease',
        '&:hover': {
            color: theme.palette.tertiaryColor
        },
        display: "inline-block",
        cursor: 'pointer'
    },
    textContainer: {
        padding: theme.spacing(3, 1, 3, 1),
        backgroundColor: theme.palette.primaryColor,
    },
    text: {
        color: theme.palette.tertiaryColor
    }
}));

export default ({setSending, sending, text, theme}) => {
    const classes = useStyles(theme);
    const transitions = useTransition(sending, null, {
        from: {x: 100, o: 0 },
        enter: { x: 0, o: 1 },
        leave: { x: 100, o: 0 }
    });
    return (
        transitions.map(({ item, key, props }) => item && (
            <AnimatedBox
                key={key}
                position="fixed"
                bottom={0}
                left={0}
                className={classes.container}
                style={{
                    transform: props.x.interpolate(x => `translate3d(0, ${x}%, 0)`),
                    opacity: props.o
                }}
            >
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    className={classes.crossContainer}
                >
                    <Typography
                        className={classes.cross}
                        onClick={() => setSending(false)}
                    >
                        X
                    </Typography>
                </Box>
                <Box
                    className={classes.textContainer}
                >
                    <Typography
                        variant='body1'
                        className={classes.text}
                    >
                        {text}
                    </Typography>
                </Box>
            </AnimatedBox>
        ))
    )
}