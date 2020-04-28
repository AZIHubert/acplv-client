import React from 'react'

import {
    Link
} from 'react-router-dom'

import HMenu from './util/HMenu'
import RMenu from './util/RMenu'

import {
    Box,
    Typography
} from '@material-ui/core'

import {
    makeStyles
} from '@material-ui/core/styles'

import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(theme => ({
    fixedContainer: {
        position: 'fixed',
        zIndex: 100,
        width: '100%',
        top: 0,
        height: theme.custom.navbarHeight
    },
    container: {
        backgroundColor: theme.palette.primaryColor,
        margin: theme.spacing(0, 6),
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(0, 1)
        },
        height: '100%',
        borderBottom: `2px solid ${theme.palette.tertiaryColor}`
    }
}))

export default (theme) => {
    const classes = useStyles(theme)
    const isVerticalMobile = useMediaQuery({ query: '(max-width: 600px)' })
    return (
        <div className={classes.fixedContainer}>
            <Box
                display="flex"
                className={classes.container}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Typography
                        variant="h4"
                        component={Link}
                        to="/"
                    >
                        acplv
                    </Typography>
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
        </div>
    )
}