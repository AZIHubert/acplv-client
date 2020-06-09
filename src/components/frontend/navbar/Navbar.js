import React from 'react';
import Logo from '../../../res/images/logo.png';

import {
    Link
} from 'react-router-dom'

import HMenu from './util/HMenu'
import RMenu from './util/RMenu'

import { Box } from '@material-ui/core'

import {
    makeStyles
} from '@material-ui/core/styles'

import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(theme => ({
    fixedContainer: {
        position: 'fixed',
        zIndex: 10,
        width: '100%',
        top: 0,
        height: theme.custom.navbarHeight
    },
    container: {
        backgroundColor: theme.palette.primaryColor,
        padding: theme.spacing(0, 6),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0, 1)
        },
        height: '100%',
        
    },
    innerContainer: {
        width: '100%',
        height: '100%',
        borderBottom: `2px solid ${theme.palette.tertiaryColor}`
    },
    logotype: {
        height: 50,
        width: 'auto'
    }
}))

export default (theme) => {
    const classes = useStyles(theme)
    const isVerticalMobile = useMediaQuery({ query: '(max-width: 741px)' })
    return (
        <div className={classes.fixedContainer}>
            <Box
                className={classes.container}
            >
                <Box
                    display="flex"
                    className={classes.innerContainer}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                    >
                        <Link
                            to="/"
                        >
                            <img
                                className={classes.logotype}
                                src={Logo}
                                alt="logotype"
                            />
                        </Link>
                    </Box>
                    <Box
                        display="flex"
                        flexGrow={1}
                        justifyContent="flex-end"
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            {isVerticalMobile ?
                                <HMenu />
                            :
                                <RMenu />
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}