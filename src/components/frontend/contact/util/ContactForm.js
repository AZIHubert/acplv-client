import React, {
    useState,
    useEffect
} from 'react'

import CustomTextField from './CustomTextfield';
import CustomMultilinesField from './CustomMultilinesField';
import CustomButton from './CustomButton';
import ContactFeedBack from './ContactFeedBack';

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    title: {
        paddingBottom: theme.spacing(1),
        marginBottom: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.tertiaryColor}`
    }
}))

export default ({theme}) => {
    const classes = useStyles(theme);
    const [loading, setLoading] = useState(false);
    const [feedbackMessage, setFeedbackMesage] = useState('');
    const [message, setMessage] = useState({
        email: '',
        object: '',
        firstName: '',
        lastName: '',
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
    const timerSubmit = () => {
        timerSubmitVar = setTimeout(() => {
            setLoading(false);
            setMessage({
                email: '',
                object: '',
                firstName: '',
                lastName: '',
                body: ''
            });
            setFeedbackMesage('Votre message à bien été envoyé');
            setSending(true);
            timerSending()
        }, 2000);
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(!loading){
            setLoading(true);
            timerSubmit()
        }
    }
    const handleChange = e => {
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
                    className={classes.title}
                >
                    <Typography
                        variant="h2"
                    >
                        Send us an email
                    </Typography>
                </Box>
                <form
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <CustomTextField
                        label="email"
                        value={message.email}
                        handleChange={handleChange}
                        name="email"
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
                            />
                        </Grid>
                    </Grid>
                    <CustomTextField
                        label="objet"
                        value={message.object}
                        handleChange={handleChange}
                        name="object"
                        loading={loading}
                    />
                    <CustomMultilinesField
                        label="message"
                        value={message.body}
                        handleChange={handleChange}
                        name="body"
                        loading={loading}
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
}