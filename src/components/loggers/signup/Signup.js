import React, {
    useState,
    useContext
} from 'react';

import { AuthContext } from '../../../context/AuthContext';

import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

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
        margin: theme.spacing(4, 0)
    },
    signupText: {
        fontSize: '0.8rem',
        paddingTop: theme.spacing(1)
    },
    signupLink: {
        color: theme.palette.tertiaryColor,
        paddingLeft: theme.spacing(1)
    }
}));

export default ({history, theme}) => {
    const classes = useStyles(theme);
    const context = useContext(AuthContext);
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
    const [registerUser, {loading}] = useMutation(REGIRSTER_USER, {
        update(_, {data: {register: userData}}){
            context.login(userData);
            history.push('/');
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: loginInfo
    });
    const handleSubmit = e => {
        e.preventDefault();
        registerUser();
    };
    return (
        <FormWrapper
            title="signup"
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
                type="password"
                value={loginInfo.password}
                onChange={handleChange}
                name='password'
                error={!!errors.password}
                helperText={errors.password}
            />
            <TextField
                fullWidth
                label='Confirm Password'
                type="password"
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
                {loading ? "loading" : "login"}
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
};

const REGIRSTER_USER = gql`
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
        $registerConfirmation: String!
    ) {
        register(
            registerInput: {
                username: $username
                email: $email
                password: $password
                confirmPassword: $confirmPassword
                registerConfirmation: $registerConfirmation
            }
        ){
            _id
            email
            token
            username
            createdAt
        }
    }
`;