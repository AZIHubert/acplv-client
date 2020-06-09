import React from 'react';

import { Box, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(3, 4),
        borderBottom: props => props.borderbottom ? `1px solid ${theme.palette.secondaryColor}` : ''
    },
    titleContainer: {
        paddingBottom: theme.spacing(2)
    }
}));

export default (props) => {
    const classes = useStyles(props);
    const {children, title} = props;
    return (
        <Box className={classes.container}>
            <Box className={classes.titleContainer}>
                <Typography variant="h3">
                    {title}
                </Typography>
            </Box>
            <Box>
                {children}
            </Box>
        </Box>
    );
};