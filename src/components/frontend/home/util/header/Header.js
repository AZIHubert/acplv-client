import React from 'react'

import SubComponentWrapper from '../../../util/SubComponentWrapper'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundImage: 'url(\'https://dummyimage.com/500x700/757575/000000&text=Header+Image\')',
        backgroundSize: '40%',
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
    paddingLeft: {
        padding: theme.spacing(0, 0, 0, 15)
    },
    subTitleContainer: {
        paddingBottom: theme.spacing(15),
    },
}))

export default ({theme}) => {
    const classes = useStyles(theme)
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
                <Box
                    display="flex"
                    justifyContent="space-between"
                    className={classes.whoAreWeContainer}
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
                        // textAlign="center"
                    >
                        <Typography
                            variant="h1"
                        >
                            nous
                        </Typography>
                    </Box>
                    
                </Box>
            </div>
        </SubComponentWrapper>
    )
}