import React from 'react'

import { Box, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        borderBottom: `1px solid ${theme.palette.secondaryColor}`,
        marginBottom: props => props.isLast ? '' : theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5)
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
    const {service} = props
    return (
        <Box
            className={classes.container}
        >
            <Typography
                variant="h2"
                className={classes.title}
            >
                {service.title}
            </Typography>
        </Box>
    )
}