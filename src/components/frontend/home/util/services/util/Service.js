import React from 'react';
import Title from '../../../../util/Title';

import {
    Box
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    outerContainer: {
        paddingBottom: props => props.isLast ? '' : theme.spacing(1),
    },
    innerContainer: {
        paddingBottom: props => props.isLast ? '' : theme.spacing(1),
    },
    title: {
        fontSize: '4rem',
        [theme.breakpoints.down('824')]: {
            fontSize: '2.5rem',
            textStrokeWidth: 'unset',
            color: theme.palette.secondaryColor
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem'
        },
        color: 'transparent',
        textStrokeWidth: 1,
        textStrokeColor: theme.palette.secondaryColor,
    }
}))

export default (props) => {
    const classes = useStyles(props)
    const {service} = props;
    return (
        <Box
            className={classes.outerContainer}
        >
            <Box
                className={classes.innerContainer}
            >
                <Title
                    variant="h2"
                    title={service.title}
                    customClass={classes.title}
                    lineBottom
                />
            </Box>
        </Box>
    )
}