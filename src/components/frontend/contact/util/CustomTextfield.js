import React from 'react'

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: theme.spacing(2)
    }
}))

export default ({label, theme}) => {
    const classes = useStyles(theme)
    return (
        <Box
            className={classes.container}
        >
            <TextField
                fullWidth
                label={label}
            />
        </Box>
    )
}