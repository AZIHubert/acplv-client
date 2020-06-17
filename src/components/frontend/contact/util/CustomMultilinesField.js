import React from 'react'

import {
    TextField,
    Box,
    Typography
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    container: {
        opacity: props => props.loading ? '0.5' : ''
    },
    label: {
        textTransform: 'lowercase',
        fontSize: '1rem',
    },
    textField: {
        '& .MuiInputBase-root': {
            cursor: 'none'
        },
        '& textarea': {
            cursor: 'none'
        }
    }
}))

export default props => {
    const {label, handleChange, value, name, error, helperText} = props;
    const classes = useStyles(props)
    return (
        <Box
            className={classes.container}
        >
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
                className={classes.textField}
                error={error}
                helperText={helperText}
            />
        </Box>
    )
}