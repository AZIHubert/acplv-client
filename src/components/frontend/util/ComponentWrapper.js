import React from 'react';

import Footer from '../footer/Footer';

import {
    Box
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        overflowX: props => props.hidden ? 'hidden' : 'visible',
        marginTop: theme.custom.navbarHeight,
        paddingBottom: theme.custom.footerHeight,
        minHeight: '100vh',
        position: 'relative',
    },
    wrapper: {
        margin: theme.spacing(0, 6),
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(0, 1)
        },
    }
}))

export default (props) => {
    const {children} = props
    const classes = useStyles(props);
    return (
        <Box
            className={classes.container}
        >
            <div className={classes.wrapper}>
                {children}
            </div>
            <Footer />
        </Box>
    )
}