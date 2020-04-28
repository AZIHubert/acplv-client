import React from 'react'

import {
    Box
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    squareBox: {
        position: 'relative',
        width: 30,
        // overflow: 'hidden',
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
        '&:hover': {
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
    const classes = useStyles(theme)
    return (
        <Box>
            <div
                className={classes.squareBox}
            >
                <div
                    className={classes.squareContent}
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
    )
}