import React from 'react'

import {
    TextField,
    Box,
    Typography
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    label: {
        textTransform: 'lowercase',
        fontSize: '1rem'
    }
}))

export default ({label, handleChange, value, name}) => {
    const classes = useStyles()
    return (
        <Box>
            <Box>
                <Typography
                    variant="body1"
                    className={classes.label}
                >
                    {label}
                </Typography>
            </Box>
            <TextField
                multiline
                fullWidth
                rows={5}
                onChange={handleChange}
                value={value}
                name={name}
            ></TextField>
        </Box>
    )
}