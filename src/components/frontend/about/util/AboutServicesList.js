import React from 'react'

import AboutServicesItem from './AboutServicesItem'

import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: props => props.isLast ? '' : theme.spacing(5)
    },
    title: {
        paddingBottom: theme.spacing(3),
        fontSize: '3rem'
    }
}))

export default (props) => {
    const classes = useStyles(props);
    const {serviceCat} = props;
    return (
        <div className={classes.container}>
            <Typography
                variant="h2"
                className={classes.title}
            >
                {serviceCat.title}
            </Typography>
            {serviceCat.services.map((service, i) => (
                <AboutServicesItem
                    title={service.title}
                    key={service._id}
                    isLast={i === serviceCat.services.length - 1}
                />
            ))}
        </div>
    )
}