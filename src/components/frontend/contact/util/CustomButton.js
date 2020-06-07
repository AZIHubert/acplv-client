import React, {
    useState
} from 'react';

import {
    Button,
    Box,
    Typography
} from '@material-ui/core';

import {
    useSpring,
    animated,
    interpolate,
    useTransition
} from 'react-spring';

import {
    makeStyles
} from '@material-ui/core/styles';

const AnimatedButton = animated(Button);
const AnimatedTypography = animated(Typography);

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(3),
        paddingRight: theme.spacing(4)
    },
    button: {
        fontSize: '1.5rem',
        width: 150,
        height: 150,
        borderRadius: '50%',
        backgroundColor: theme.palette.tertiaryColor,
        color: theme.palette.primaryColor,
        transformOrigin: 'center',
        cursor: 'none',
        '&:hover': {
            backgroundColor: theme.palette.tertiaryColor,
            color: theme.palette.primaryColor,
        }
    },
    textContainer: {
        overflow: 'hidden',
        height: 138
    },
    text: {
        fontSize: '1.4rem'
    }
}))

export default ({text, loading, theme}) => {
    const [isHover, setIsHover] = useState(false);
    const classes = useStyles(theme);
    const {
        rotation,
        zoom
    } = useSpring({
        rotation: loading ? 360 : isHover ? 20 : -20,
        zoom: loading ? 1.1 : isHover ? 0.9 : 1
    });
    const transitions = useTransition(loading, null, {
        from: {
            position: 'absolute',
            opacity: 1
        },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        })
    return (
        <Box
            textAlign="right"
            className={classes.container}
        >
            <AnimatedButton
                variant="contained"
                className={classes.button}
                disableRipple
                type="submit"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                style={{
                    transform: interpolate([rotation, zoom], (r, z) => `scale(${z}) rotate(${r}deg)`)
                }}
            >
                {transitions.map(({ item, key, props }) => 
                    item ?
                    <AnimatedTypography
                        key={key}
                        variant="body1"
                        style={props}
                    >
                        wait
                    </AnimatedTypography>
                    :
                    <AnimatedTypography
                        key={key}
                        variant="body1"
                        className={classes.text}
                        style={
                            props
                        }
                    >
                        {text}
                    </AnimatedTypography>
                )}
            </AnimatedButton>
        </Box>
    )
}