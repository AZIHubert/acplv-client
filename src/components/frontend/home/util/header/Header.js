import React from 'react'

import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundImage: 'url(\'https://dummyimage.com/500x700/757575/000000&text=Header+Image\')',
        backgroundSize: '30%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        marginBottom: theme.spacing(10)
    },
    titleContainer: {
        paddingBottom: theme.spacing(1)
    },
    paddingLeft: {
        padding: theme.spacing(0, 0, 0, 15)
    },
    subTitleContainer: {
        paddingBottom: theme.spacing(29),
    },
}))

export default ({theme}) => {
    const classes = useStyles(theme)
    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Typography
                    variant="h1"
                    className={classes.paddingLeft}
                >
                    acplv
                </Typography>
                <Typography variant="h1">
                    solutions globales
                </Typography>
                <Typography
                    variant="h1"
                >
                    en signalétique
                </Typography>
            </div>
            <div className={classes.subTitleContainer}>
                <Typography
                    variant="body2"
                    className={classes.paddingLeft}
                >
                    based in paris
                </Typography>
            </div>
        </div>
    )
}