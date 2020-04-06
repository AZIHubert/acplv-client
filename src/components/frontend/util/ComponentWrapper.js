import React from 'react'

import Footer from '../footer/Footer'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
        position: 'relative',
        paddingBottom: props => props.doublePaddingBottom ? theme.spacing(14) : theme.spacing(7)
    },
    wrapper: {
        margin: theme.spacing(0, 3)
    },
    title: {
        fontSize: '6rem'
    }
}))

export default (props) => {
    const {children, title} = props
    const classes = useStyles(props)
    return (
        <div
            className={classes.container}
        >
            <div className={classes.wrapper}>
                {title && (
                    <Box
                        textAlign="center"
                    >
                        <Typography
                            variant="h1"
                            className={classes.title}
                        >
                            {title}
                        </Typography>
                    </Box>
                )}
                {children}
            </div>
            <Footer />
        </div>
    )
}