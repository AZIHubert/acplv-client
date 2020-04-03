import React, {Fragment} from 'react'

import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    title: {
        borderBottom: props => props.isLast ? '' : `1px solid ${theme.palette.secondaryColor}`
    }
}))

export default (props) => {
    const {title} = props
    const classes = useStyles(props)
    return (
        <Fragment>
            <Typography
                variant="h3"
                className={classes.title}
            >
                {title}
            </Typography>
        </Fragment>
    )
}