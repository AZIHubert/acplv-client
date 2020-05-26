import React from 'react'

import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        paddingBottom: theme.spacing(2),
        opacity: props => props.loading ? '0.5' : ''
    },
    textField: {
        '& .MuiInputBase-root': {
            cursor: 'none'
        },
        '& input': {
            cursor: 'none'
        }
    }
}))

export default props => {
    const {label, value, handleChange, name} = props;
    const classes = useStyles(props)
    return (
        <Box
            className={classes.container}
        >
            <TextField
                fullWidth
                label={label}
                value={value}
                onChange={handleChange}
                name={name}
                className={classes.textField}
            />
        </Box>
    )
}