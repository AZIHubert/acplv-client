import React from 'react'

import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    wrapper: {
        margin: theme.spacing(0, 3)
    }
}))

export default ({children, title, theme}) => {
    const classes = useStyles(theme)
    return (
        <div className={classes.wrapper}>
            {title && (
                <Typography
                    variant="h1"
                >
                    {title}
                </Typography>
            )}
            {children}
        </div>
    )
}