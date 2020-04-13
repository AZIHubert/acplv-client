import React from 'react'

import SubComponentWrapper from '../../../util/SubComponentWrapper'

import useWindowSize from '../../../../../hooks/useWindowSize'

import {
    Box,
    Typography
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundImage: 'url(\'https://dummyimage.com/500x700/757575/000000&text=Header+Image\')',
        backgroundSize: '40%',
        [theme.breakpoints.down('xs')]: {
            backgroundSize: '50%',
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        // marginBottom: theme.spacing(10)
    },
    titleContainer: {
        paddingBottom: theme.spacing(1)
    },
    whoAreWeContainer: {
        height: theme.spacing(17)
    },
    paddingBottom: {
        marginBottom: theme.spacing(5)
    },
    paddingLeft: {
        paddingLeft: theme.spacing(15),
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(3),
        },
    },
    subTitleContainer: {
        paddingBottom: theme.spacing(15),
    },
}))

export default ({theme}) => {
    const classes = useStyles(theme)
    const {width} = useWindowSize()
    return (
        <SubComponentWrapper
            paddingTop
        >
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
                
                    {width >= 600 ?
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            className={`${classes.whoAreWeContainer} ${classes.paddingBottom}`}
                        >
                            <Typography
                                variant="h1"
                            >
                                qui
                            </Typography>
                            <Box
                                flexGrow="3"
                                alignSelf="flex-end"
                                textAlign="center"
                            >
                                <Typography
                                    variant="h1"
                                >
                                    sommes
                                </Typography>
                            </Box>
                            <Box
                                flexGrow="2"
                                textAlign="right"
                            >
                                <Typography
                                    variant="h1"
                                >
                                    nous
                                </Typography>
                            </Box>
                        </Box>
                    :
                        <Box
                            className={classes.paddingBottom}
                        >
                            <Typography
                                variant="h1"
                            >
                                qui sommes nous
                            </Typography>
                        </Box>
                    }
            </div>
        </SubComponentWrapper>
    )
}