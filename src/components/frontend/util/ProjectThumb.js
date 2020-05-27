import React, {
    useRef
} from 'react'

import {
    Grid,
    Typography,
    Box
} from '@material-ui/core'

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
        paddingBottom: theme.spacing(1),
        marginTop: props => props.isFirst ? '0' : theme.spacing(8)
    },
    squareBox: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: 'red',
        marginBottom: theme.spacing(1),
        '&:before': {
            content: '""',
            display: 'block',
            paddingTop: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            '&:before': {
                paddingTop: '80%'
            }
        },
    },
    squareContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'red'
    },
    thumbnailContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.secondaryColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: props => `url('${props.project.thumbnailUrl}')`
    },
    projectTypeContainer: {
        [theme.breakpoints.up('lg')]: {
            textAlign: 'right'
        },
    },
    lineContainer: {
        width: '100%',
        height: 2
    },
    line: {
        height: '100%',
        backgroundColor: theme.palette.secondaryColor
    }
}))

export default props => {
    const {project} = props;
    const classes = useStyles(props);
    const thumbRef = useRef(null);
    const onScreen = useOnScreen(thumbRef, "-70px 0px 0px 0px", true);
    const {y, opacity, lineOpacity, lineWidth} = useSpring({
        y: onScreen ? 0 : 20,
        opacity: onScreen ? 1 : 0,
        lineWidth: onScreen ? '100%' : '0%',
        lineOpacity: onScreen ? 1 : 0,
        config
    });
    return (
        <Box
            ref={thumbRef}
            className={classes.container}
        >
            <AnimatedBox
                style={{
                    opacity,
                    transform: y.interpolate(y => `translate3d(0px, ${y}%, 0px)`)
                }}
            >
                <div
                    className={classes.squareBox}
                >
                    <div
                        className={classes.squareContent}
                    >
                        <div
                            className={classes.thumbnailContainer}
                        ></div>
                    </div>
                </div>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12} lg={6}
                    >
                        <Box>
                            <Typography
                                variant="body2"
                                className={classes.projectTitle}
                            >
                                {project.title}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12} lg={6}
                    >
                        <Box
                            className={classes.projectTypeContainer}
                        >
                            <Typography
                                variant="body1"
                            >
                                {project.type.title}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    display="flex"
                    justifyContent="left"
                    className={classes.lineContainer}
                >
                    <AnimatedBox
                        className={classes.line}
                        style={{
                            width: lineWidth,
                            opacity: lineOpacity
                        }}
                    >
                    </AnimatedBox>
                </Box>
            </AnimatedBox>
        </Box>
    )
}