import React from 'react';
import Title from '../../../../util/Title';

import {
    Box
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        fontFamily: 'GillSansBold',
        fontSize: '5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '3.5rem',
            textStrokeWidth: 'unset',
            color: theme.palette.secondaryColor
        },
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
    const {service, isLast} = props;
    return (
        <Box
            className={classes.container}
        >
            <Title
                variant="h2"
                title={service.title}
                customClass={classes.title}
                lineBottom={!isLast}
            />
        </Box>
    )
}