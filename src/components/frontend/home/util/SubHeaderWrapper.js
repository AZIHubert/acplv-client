import React from 'react'

import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(10, 0),
        borderTop: `1px solid ${theme.palette.secondaryColor}`
    },
    titleContainer: {
        paddingBottom: theme.spacing(5)
    }
}))

export default ({title, children, theme}) => {
    const classes = useStyles(theme)
    return (
        <div
            className={classes.container}
        >
            <div
                className={classes.titleContainer}
            >
                <Typography
                    variant="h1"
                >
                    {title}
                </Typography>
            </div>

            {children}
        </div>
    )
}