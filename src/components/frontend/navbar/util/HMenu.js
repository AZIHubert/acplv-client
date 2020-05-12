import React, {
    useState,
    useContext
} from 'react';

import HMenuDrawer from './HMenuDrawer';

import {
    HMenuContext
} from '../../../../context/HMenuContext';

import {
    Box
} from '@material-ui/core'

import 
{useTransition
} from 'react-spring';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    squareBox: {
        cursor: 'pointer',
        position: 'relative',
        width: 30,
        '&::before': {
            content: '""',
            display: 'block',
            paddingTop: '75%'
        }
    },
    squareContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transition: theme.transitions.create('transform', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.complex
        }),
        '&:hover, &.animated': {
            transform: 'rotate(90deg)',
            '& .topBar div, & .bottomBar div': {
                width: '50%'
            }
        }
    },
    barContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: theme.spacing(0.25)
    },
    bar: {
        position: 'absolute',
        left: 0,
        width: '100%',
        height: 3,
        overflow: 'hidden',
        display: 'flex',
        '& div': {
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.secondaryColor,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.easeIn,
                duration: theme.transitions.duration.complex
            }),
            borderRadius: 10,
        }
    },
    topBar: {
        top: 0,
    },
    middleBar: {
        top: '50%',
        transform: 'translateY(-50%)'
    },
    bottomBar: {
        bottom: 0,
        justifyContent: 'flex-end'
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme);
    const {menuClick, open} = useContext(HMenuContext);
    const transitions = useTransition(open, null, {
        from: { opacity: 0, yBox: 20, yTypography: 100 },
        enter: {opacity: 1, yBox: 0, yBox: 0, yTypography: 0},
        leave: { opacity: 0, yBox: 20, yTypography: 100 },
    })
    return (
        <>
            <Box>
                <div
                    className={classes.squareBox}
                    onClick={() => menuClick(true)}
                >
                    <div
                        className={`${classes.squareContent} ${open ? 'animated' : ''}`}
                    >
                        <div
                            className={classes.barContainer}
                        >
                            <div
                                className={`topBar ${classes.bar} ${classes.topBar}`}
                            >
                                <div></div>
                            </div>
                            <div
                                className={`middleBar ${classes.bar} ${classes.middleBar}`}
                            >
                                <div></div>
                            </div>
                            <div
                                className={`bottomBar ${classes.bar} ${classes.bottomBar}`}
                            >
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            {transitions.map(({ item, key, props }) =>
                item && <HMenuDrawer
                    key={key}
                    setOpen={menuClick.bind(this, false)}
                    animatedProps={props}
                />
            )}
        </>
    )
}