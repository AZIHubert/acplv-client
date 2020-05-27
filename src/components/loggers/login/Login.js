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

import {
    makeStyles
} from '@material-ui/core/styles'

import FormWrapper from '../util/FormWrapper';

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
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        registerConfirmation: ''
    });
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        registerConfirmation: ''
    });
    const handleChange = e => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ''
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        setLoginInfo({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            registerConfirmation: ''
        });
    };
    return (
        <FormWrapper
            title="login"
            handleSubmit={handleSubmit}
        >
            <TextField
                fullWidth
                label='Username'
                value={loginInfo.username}
                onChange={handleChange}
                name='username'
                error={!!errors.username}
                helperText={errors.username}
            />
            <TextField
                fullWidth
                label='Email'
                value={loginInfo.email}
                onChange={handleChange}
                name='email'
                error={!!errors.email}
                helperText={errors.email}
            />
            <TextField
                fullWidth
                label='Password'
                value={loginInfo.password}
                onChange={handleChange}
                name='password'
                error={!!errors.password}
                helperText={errors.password}
            />
            <TextField
                fullWidth
                label='Confirm Password'
                value={loginInfo.confirmPassword}
                onChange={handleChange}
                name='confirmPassword'
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
            />
            <TextField
                fullWidth
                label='Register Confirmation'
                value={loginInfo.registerConfirmation}
                onChange={handleChange}
                name='registerConfirmation'
                error={!!errors.registerConfirmation}
                helperText={errors.registerConfirmation}
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
                    You don't have an account ? 
                    <NavLink
                        to='/signup'
                        className={classes.signupLink}
                    >
                        Signup
                    </NavLink>
                </Typography>
            </Box>
        </FormWrapper>
    );
;}