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

import FormWrapper from '../util/FormWrapper';

import {
    makeStyles
} from '@material-ui/core/styles';

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
    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(_, {data: {login: userData}}){
            context.login(userData);
            history.push('/');
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: signupInfo
    });
    const handleSubmit = e => {
        e.preventDefault();
        loginUser()
    };
    return (
        <FormWrapper
            title="login"
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
                name='password'
                type="password"
                error={!!errors.password}
                helperText={errors.password}
            />
            <Button
                variant="contained"
                disableRipple
                type="submit"
                className={classes.submitButton}
            >
                {loading ? 'loading' : 'login'}
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
};

const LOGIN_USER = gql`
    mutation signup(
        $emailOrUsername: String!
        $password: String!
    ) {
        login(
            emailOrUsername: $emailOrUsername
            password: $password
        ){
            _id
            email
            token
            username
            createdAt
        }
    }
`;