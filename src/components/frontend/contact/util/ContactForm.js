import React, {useState} from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    textField: {
        paddingBottom: theme.spacing(1)
    },
    paddingRight: {
        paddingRight: theme.spacing(1)/2
    },
    paddingLeft: {
        paddingLeft: theme.spacing(1)/2
    },
    multilineRoot: {
        '& textarea': {
            paddingRight: theme.spacing(2),
            lineHeight: '1.4em'
        },
        '& textarea::-webkit-scrollbar-track': {
            border: `1px solid ${theme.palette.tertiaryColor}`
        },
        '& textarea::-webkit-scrollbar': {
            width: 10,
            background: theme.palette.primaryColor
        },
        '& textarea::-webkit-scrollbar-thumb': {
            background: theme.palette.tertiaryColor,
            border: `1px solid ${theme.palette.tertiaryColor}`
        },
    },
    buttonRoot: {
        backgroundColor: theme.palette.tertiaryColor,
        '&:hover': {
            backgroundColor: theme.palette.tertiaryColor,
            borderRadius: 60,
            width: 115,
            boxShadow: 'none',
        }
    },
    buttonContained: {
        boxShadow: 'none',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        display: 'block',
        width: 100,
        padding: 10,
        borderRadius: 0,
        transition: [
            theme.transitions.create(['border-radius'], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.complexe,
            }), theme.transitions.create(['width'], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shortest
            })
        ],
    },
    buttonLabel: {
        color: theme.palette.primaryCOlor,
        display: 'flex',
        alignItems: 'center'
    },
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
        <form
            noValidate
            onSubmit={handleSubmit}
        >
            <TextField
                autoFocus
                name='email'
                fullWidth
                label={'Email'}
                value={message.email}
                onChange={handleChange}
                variant="outlined"
                className={classes.textField}
            ></TextField>
            <TextField
                name='object'
                fullWidth
                label='Objet'
                value={message.object}
                onChange={handleChange}
                variant="outlined"
                className={classes.textField}
            ></TextField>
            <Grid container>
                <Grid
                    item
                    xs={6}
                    className={classes.paddingRight}
                >
                    <TextField
                        name='firstName'
                        fullWidth
                        value={message.firstName}
                        onChange={handleChange}
                        label='Prenom'
                        variant="outlined"
                        className={classes.textField}
                    ></TextField>
                </Grid>
                <Grid
                    item
                    xs={6}
                    className={classes.paddingLeft}
                >
                    <TextField
                        name='lastName'
                        fullWidth
                        value={message.lastName}
                        onChange={handleChange}
                        label='Nom'
                        variant="outlined"
                        className={classes.textField}
                    ></TextField>
                </Grid>
            </Grid>
            <TextField
                name='phone'
                fullWidth
                value={message.phone}
                onChange={handleChange}
                label='Téléphone'
                variant="outlined"
                className={classes.textField}
            ></TextField>
            <Typography variant="body2">
                body
            </Typography>
            <TextField
                id="outlined-multiline-static"
                multiline
                fullWidth
                rows={10}
                value={message.body}
                onChange={handleChange}
                name='body'
                variant="outlined"
                classes={{root: classes.multilineRoot}}
            />
            <div>
                <Button
                    type="submit"
                    variant="contained"
                    disableRipple={true}
                    classes={{
                        root: classes.buttonRoot,
                        contained: classes.buttonContained,
                        label: classes.buttonLabel
                    }}
                >
                    envoyer
                </Button>
            </div>
        </form>
        
    )
}