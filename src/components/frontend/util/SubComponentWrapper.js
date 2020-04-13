import React from 'react'

import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        padding: props => theme.spacing(
            props.paddingTop ? 10 : 0,
            0,
            props.paddingBottom ? 10 : 0
        ),
        borderTop: props => props.hasBorder ? `1px solid ${theme.palette.secondaryColor}` : ''
    },
    titleContainer: {
        paddingBottom: theme.spacing(5)
    },
    subTitle: {
        paddingLeft: theme.spacing(15)
    }
}))

export default (props) => {
    const {title, subTitle, children} = props
    const classes = useStyles(props)
    return (
        <div
            className={classes.container}
        >
            {title && <div
                className={subTitle ? '' : classes.titleContainer}
            >
                <Typography
                    variant="h1"
                >
                    {title}
                </Typography>
            </div>}
            {subTitle && <div
                className={classes.titleContainer}
            >
                <Typography
                    variant="h1"
                    className={classes.subTitle}
                >
                    {subTitle}
                </Typography>
            </div>}

            {children}
        </div>
    )
}