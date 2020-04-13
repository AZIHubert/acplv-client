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
    const classes = useStyles(theme)
    const [message, setMessage] = useState({
        email: '',
        object: '',
        firstName: '',
        lastName: '',
        body: ''
    })
    const handleChange = e => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value });
    }
    const handleSubmit = e => {
        e.preventDefault();
        setMessage({
            email: '',
            object: '',
            firstName: '',
            lastName: '',
            body: ''
        })
    }
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
            </Box>
            <form
                noValidate
                onSubmit={handleSubmit}
            >
                <CustomTextField
                    label="email"
                />
                <CustomTextField
                    label="objet"
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
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <CustomTextField
                            label="nom"
                        />
                    </Grid>
                </Grid>
                <CustomMultilinesField
                    label="message"
                />
                <CustomButton
                    text="send"
                />
            </form>
        </Box>
        
    )
}