import React, {
    useState,
    useEffect
} from 'react';

import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import CustomTextField from './CustomTextfield';
import CustomMultilinesField from './CustomMultilinesField';
import CustomButton from './CustomButton';
import ContactFeedBack from './ContactFeedBack';

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    form: {
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(8)
        }
    },
    titleContainer: {
        paddingBottom: theme.spacing(1),
        marginBottom: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.tertiaryColor}`
    },
    title: {
        [theme.breakpoints.down('lg')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '2.75rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.25rem'
        }
    }
}))

export default ({theme}) => {
    const classes = useStyles(theme);
    const [feedbackMessage, setFeedbackMesage] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        subject: '',
        firstName: '',
        lastName: '',
        body: ''
    })
    const [message, setMessage] = useState({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        phone: '',
        subject: '',
        body: ''
    });
    const [sending, setSending] = useState(false);
    let timerSendingVar;
    const timerSending = () => {
        timerSendingVar = setTimeout(() => {
            setSending(false);
        }, 5000);
    }
    let timerSubmitVar;
    const [sendEmail, {loading}] = useMutation(SEND_EMAIL, {
        update(_, {data: {register: userData}}){
            setFeedbackMesage('Votre message à bien été envoyé');
            setSending(true);
            timerSending();
            setMessage({
                email: '',
                company: '',
                subject: '',
                firstName: '',
                lastName: '',
                body: '',
                phone: ''
            });
        },
        onError(err){
            const userError = err.graphQLErrors[0].extensions.exception.errors
            setErrors(userError);
            if(!userError){
                setFeedbackMesage('Désolé, il y a eu un problème, votre message n\'a pas été envoyé correctement.');
                setSending(true);
            }
        },
        variables: message
    });
    const handleSubmit = e => {
        e.preventDefault();
        console.log(message);
        if(!loading) sendEmail();
    }
    const handleChange = e => {
        if(!!errors[e.target.name]){
            setErrors(prevState => ({
                ...prevState,
                [e.target.name]: ''
            }))
        }
        if(!loading){
            setMessage({
                ...message,
                [e.target.name]: e.target.value
            });
        }
    }
    useEffect(() => {
        return () => {
            clearTimeout(timerSubmitVar);
            clearTimeout(timerSendingVar);
        }
    }, [timerSubmitVar, timerSendingVar])
    return (
        <>
            <Box>
                <Box
                    className={classes.titleContainer}
                >
                    <Typography
                        variant="h2"
                        className={classes.title}
                    >
                        Send us an email
                    </Typography>
                </Box>
                <form
                    noValidate
                    className={classes.form}
                    onSubmit={handleSubmit}
                >
                    <CustomTextField
                        label="email"
                        value={message.email}
                        handleChange={handleChange}
                        name="email"
                        loading={loading}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <CustomTextField
                        label="company"
                        value={message.company}
                        handleChange={handleChange}
                        name="company"
                        loading={loading}
                    />
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={6}
                        >
                            <CustomTextField
                                label="prénom"
                                value={message.firstName}
                                handleChange={handleChange}
                                name="firstName"
                                loading={loading}
                                error={!!errors.firstName}
                                helperText={errors.firstName}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                        >
                            <CustomTextField
                                label="nom"
                                value={message.lastName}
                                handleChange={handleChange}
                                name="lastName"
                                loading={loading}
                                error={!!errors.lastName}
                                helperText={errors.lastName}
                            />
                        </Grid>
                    </Grid>
                    <CustomTextField
                        label="phone"
                        value={message.phone}
                        handleChange={handleChange}
                        name="phone"
                        loading={loading}
                    />
                    <CustomTextField
                        label="objet"
                        value={message.subject}
                        handleChange={handleChange}
                        name="subject"
                        loading={loading}
                        error={!!errors.subject}
                        helperText={errors.subject}
                    />
                    <CustomMultilinesField
                        label="message"
                        value={message.body}
                        handleChange={handleChange}
                        name="body"
                        loading={loading}
                        error={!!errors.body}
                        helperText={errors.body}
                    />
                    <CustomButton
                        text="envoyer"
                        loading={loading}
                    />
                </form>
            </Box>
            <ContactFeedBack
                text={feedbackMessage}
                sending={sending}
                setSending={setSending}
            />
        </>
    )
};

const SEND_EMAIL = gql`
    mutation sendEmail(
        $email: String!
        $firstName: String!
        $lastName: String!
        $company: String!
        $phone: String!
        $subject: String!
        $body: String!

    ) {
        sendEmail(
            emailInput: {
                email: $email
                firstName: $firstName
                lastName: $lastName
                company: $company
                phone: $phone
                subject: $subject
                body: $body
            }
        )
    }
`;