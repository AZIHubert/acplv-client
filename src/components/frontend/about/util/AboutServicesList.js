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
        fontSize: '5.5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '4rem',
        },
        [theme.breakpoints.down('824')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
        },
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
            {serviceCat.services.sort((a, b) => a.index - b.index).map((service, i) => (
                <AboutServicesItem
                    title={service.title}
                    key={service._id}
                    isLast={i === serviceCat.services.length - 1}
                />
            ))}
        </div>
    )
}