import React, {
    useState
} from 'react';

import {
    NavLink
} from 'react-router-dom';

import {
    TextField,
    Button,
    Box,
    Typography
} from '@material-ui/core';

import FormWrapper from '../util/FormWrapper';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    submitButton: {
        margin: theme.spacing(2, 0)
    },
    signupText: {
        fontSize: '0.8rem'
    },
    signupLink: {
        color: theme.palette.tertiaryColor,
        paddingLeft: theme.spacing(1)
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme);
    const [signupInfo, setSignupIngo] = useState({
        emailOrUsername: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        emailOrUsername: '',
        password: ''
    });
    const handleChange = e => {
        setSignupIngo({
            ...signupInfo,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ''
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        setSignupIngo({
            emailOrUsername: '',
            password: ''
        });
    };
    return (
        <FormWrapper
            title="signup"
            handleSubmit={handleSubmit}
        >
            <TextField
                fullWidth
                label='Username or Email'
                value={signupInfo.emailOrUsername}
                onChange={handleChange}
                name='emailOrUsername'
                error={!!errors.emailOrUsername}
                helperText={errors.emailOrUsername}
            />
            <TextField
                fullWidth
                label='Password'
                value={signupInfo.password}
                onChange={handleChange}
                name='emailOrUsername'
                error={!!errors.password}
                helperText={errors.password}
            />
            <Button
                variant="contained"
                disableRipple
                type="submit"
                className={classes.submitButton}
            >
                login
            </Button>
            <Box>
                <Typography
                    variant="body1"
                    className={classes.signupText}
                >
                    You already have an account? 
                    <NavLink
                        to='/login'
                        className={classes.signupLink}
                    >
                        Login
                    </NavLink>
                </Typography>
            </Box>
        </FormWrapper>
    );
;}