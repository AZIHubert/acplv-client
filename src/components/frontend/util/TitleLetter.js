import React from 'react'

import {
    Typography
} from '@material-ui/core'

import {
    makeStyles
} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    letter: {
        transform: 'translateY(100%)',
        opacity: 0,
        // transition: theme.transitions.create('transform', {
        //     easing: theme.transitions.easing.easeIn,
        //     duration: theme.transitions.duration.shortest,
        //     // delay: props => `${props.delay}s`
        // }),
        transition: 'all 1s ease',
        transitionDelay: props => `${props.delay}ms`,

        '&.v': {
            opacity: 1,
            transform: 'translateY(0%)',
        }
    }
}));

export default (props) => {
    const {letter, isVisible} = props;
    const classes = useStyles(props)
    return (
        <Typography
            variant="h1"
            className={`${classes.letter} ${isVisible ? 'v' : ''}`}
        >
            {letter}
        </Typography>
    )
}