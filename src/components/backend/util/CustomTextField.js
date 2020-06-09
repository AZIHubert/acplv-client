import React from 'react';

import { Box, TextField, FormLabel } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textFieldContainer: {
        paddingBottom: props => props.paddingBottom ? theme.spacing(3) : '',
        width: props => props.fullWidth ?  '100%' : '50%',
        [theme.breakpoints.down('md')]: {
            width: props => props.fullWidth ?  '100%' : '100%',
        }
    },
    formLabelContainer: {
        paddingBottom: theme.spacing(1)
    },
    formLabel: {
        fontSize: '1.5rem',
    }
}));

export default (props) => {
    const classes = useStyles(props);
    const {label, name, focused, textArea} = props;
    return (
        <Box className={classes.textFieldContainer}>
            {label && <Box className={classes.formLabelContainer}>
                <FormLabel className={classes.formLabel}>
                    {label}
                </FormLabel>
            </Box>}
            <TextField
                name={name}
                variant="outlined"
                fullWidth
                multiline={textArea}
                rows={textArea && 15}
                focused={focused}
            ></TextField>
        </Box>
    );
};