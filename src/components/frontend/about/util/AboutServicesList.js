import React from 'react'

import AboutServicesItem from './AboutServicesItem'

import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: props => props.isLast ? '' : theme.spacing(5)
    },
    title: {
        paddingBottom: theme.spacing(3)
    }
}))

export default (props) => {
    const {service} = props
    const classes = useStyles(props)
    return (
        <div className={classes.container}>
            <Typography
                variant="h2"
                className={classes.title}
            >
                {service.title}
            </Typography>
            {service.items.map((item, i) => (
                <AboutServicesItem
                    title={item.title}
                    key={item.index}
                    isLast={i === service.items.length - 1}
                />
            ))}
        </div>
    )
}