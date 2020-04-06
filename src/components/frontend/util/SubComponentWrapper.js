import React from 'react'

import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(10, 0),
        borderTop: props => props.hasBorder ? `1px solid ${theme.palette.secondaryColor}` : ''
    },
    titleContainer: {
        paddingBottom: theme.spacing(5)
    }
}))

export default (props) => {
    const {title, children} = props
    const classes = useStyles(props)
    return (
        <div
            className={classes.container}
        >
            {title && <div
                className={classes.titleContainer}
            >
                <Typography
                    variant="h1"
                >
                    {title}
                </Typography>
            </div>}

            {children}
        </div>
    )
}