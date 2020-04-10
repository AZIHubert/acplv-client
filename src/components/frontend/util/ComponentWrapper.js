import React from 'react'

import Footer from '../footer/Footer'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
        position: 'relative',
    },
    wrapper: {
        margin: theme.spacing(0, 6)
    },
    title: {
        fontSize: '6rem'
    }
}))

export default ({children, theme}) => {
    const classes = useStyles(theme)
    return (
        <div
            className={classes.container}
        >
            <div className={classes.wrapper}>
                {children}
            </div>
            <Footer />
        </div>
    )
}