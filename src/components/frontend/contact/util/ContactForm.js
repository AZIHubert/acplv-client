import React, {useState} from 'react'

import CustomTextField from './CustomTextfield'
import CustomMultilinesField from './CustomMultilinesField'
import CustomButton from './CustomButton'

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
    const [message, setMessage] = useState({
        email: '',
        object: '',
        firstName: '',
        lastName: '',
        body: ''
    });
    const [sending, setSending] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setMessage({
                email: '',
                object: '',
                firstName: '',
                lastName: '',
                body: ''
            });
            setSending(true);
        }, 2000);
    }
    const handleChange = e => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }
    console.log(loading, message, sending)
    return (
        <Box>
            <Box
                className={classes.title}
            >
                <Typography
                    variant="h2"
                >
                    Send us an email
                </Typography>
                {sending && 
                    <Typography
                        variant="body1"
                    >
                        votre message a bien été envoyé
                    </Typography>
                }
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
                />
                <CustomTextField
                    label="objet"
                    value={message.object}
                    handleChange={handleChange}
                    name="object"
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
                        />
                    </Grid>
                </Grid>
                <CustomMultilinesField
                    label="message"
                    value={message.body}
                    handleChange={handleChange}
                    name="body"
                />
                <CustomButton
                    text="envoyer"
                    loading={loading}
                />
            </form>
        </Box>
        
    )
}