import React from 'react'

import { Box, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        borderTop: props => props.isFirst ? '' : `1px solid ${theme.palette.secondaryColor}`,
        marginTop: props => props.isFirst ? '' : theme.spacing(0.5),
        paddingTop: props => props.isFirst ? '' : theme.spacing(0.5)
    },
    title: {
        fontSize: '4rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem',
            textStrokeWidth: 'unset',
            color: theme.palette.secondaryColor
        },
        color: 'transparent',
        textStrokeWidth: 0.4,
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