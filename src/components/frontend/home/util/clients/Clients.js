import React, {Fragment} from 'react'

import {
    Box,
    Typography
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles'

import SubComponentWrapper from '../../../util/SubComponentWrapper';
import Line from '../../../util/Line';

const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: 70,
        [theme.breakpoints.down('824')]: {
            height: 55
        },
        [theme.breakpoints.down('xs')]: {
            height: 40,
        },
    },
    textContainer: {
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)'
    },
    text: {
        lineHeight: 0
    },
    separator: {
        padding: theme.spacing(0, 1),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0, 0.5),
        },
    },
    textOne: {
        animation: theme.transitions.create('$animateOne', {
            easing: 'linear',
            duration: `${theme.custom.clientsAnimationSpeed}s`,
        }),
        animationIterationCount: 'infinite'
    },
    textTwo: {
        animation: theme.transitions.create('$animateTwo', {
            easing: 'linear',
            duration: `${theme.custom.clientsAnimationSpeed}s`,
            delay: `-${theme.custom.clientsAnimationSpeed/2}s`
        }),
        animationIterationCount: 'infinite'
    },
    "@keyframes animateOne": {
        "0%": {
            transform: 'translateX(100%)'
        },
        "100%": {
            transform: 'translateX(-100%)'
        }
    },
    "@keyframes animateTwo": {
        "0%": {
            transform: 'translateX(0)'
        },
        "100%": {
            transform: 'translateX(-200%)'
        }
    },
}))

export default ({clients, theme}) => {
    const classes = useStyles(theme);
    return (
        !!clients.length && (
            <SubComponentWrapper
                title="clients"
                paddingTop
                paddingBottom
            >
                <Line />
                <Box
                    className={classes.container}
                >
                    <Box
                        display="flex"
                        className={classes.textContainer}
                    >
                        <Box
                            display="flex"
                            className={`text ${classes.textOne}`}
                        >
                            {clients.map(client => (
                                <Fragment key={client._id}>
                                    <Typography
                                        variant="h3"
                                        className={classes.text}
                                    >
                                        {client.title.replace(/\s/g, String.fromCharCode(160))}
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        className={`${classes.separator} ${classes.text}`}
                                    >
                                        * 
                                    </Typography>
                                </Fragment>
                            ))}
                        </Box>
                        <Box
                            display="flex"
                            className={`text ${classes.textTwo}`}
                        >
                            {clients.map(client => (
                                <Fragment key={client._id   }>
                                    <Typography
                                        variant="h3"
                                        className={classes.text}
                                    >
                                        {client.title.replace(/\s/g, String.fromCharCode(160))}
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        className={`${classes.separator} ${classes.text}`}
                                    >
                                        * 
                                    </Typography>
                                </Fragment>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Line
                    justifyContent='flex-end'
                />
            </SubComponentWrapper>
        )
    );
};