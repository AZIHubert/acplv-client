import React from 'react'

import AboutServicesList from './AboutServicesList'

import SubComponentWrapper from '../../util/SubComponentWrapper'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    titleContainer: {
        paddingBottom: theme.spacing(5)
    }
}))

export default ({theme, serviceCats}) => {
    const classes = useStyles(theme);
    return (
        <SubComponentWrapper
            hasBorder
            paddingTop
            paddingBottom
        >
            <Box
                className={classes.titleContainer}
            >
                <Typography
                    variant="h1"
                >
                    nos services
                </Typography>
            </Box>
            {serviceCats.map((serviceCat, i) => (
                <AboutServicesList
                    serviceCat={serviceCat}
                    key={serviceCat._id}
                    isLast={i === serviceCats.length - 1}
                />
            ))}
        </SubComponentWrapper>
    )
}