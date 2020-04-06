import React from 'react'

import ComponentWrapper from '../util/ComponentWrapper'
import ContactForm from './util/ContactForm'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    paddingLeft: {
        paddingLeft: theme.spacing(1)
    },
    paddingRight: {
        paddingRight: theme.spacing(1)
    },
    contactContainer: {
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.tertiaryColor}`
    }
}))


export default ({theme}) => {
    const classes = useStyles(theme)
    return (
        <ComponentWrapper
            title="contact"
            doublePaddingBottom
        >
            <Grid
                container
                className={classes.container}
            >
                <Grid
                    item
                    xs={6}
                    className={classes.paddingRight}
                >
                    <ContactForm />
                </Grid>
                <Grid
                    item
                    xs={6}
                    className={classes.paddingLeft}
                >
                    <Box
                        className={classes.contactContainer}
                    >
                        <Typography
                            variant='h2'
                        >
                            téléphone
                        </Typography>
                        <Typography
                            variant='h3'
                        >
                            +33.08.11.11.11.11
                        </Typography>
                    </Box>
                    <Box
                        className={classes.contactContainer}
                    >
                        <Typography
                            variant='h2'
                        >
                            Email
                        </Typography>
                        <Typography
                            variant='h3'
                        >
                            CONTACT@ACPLV.COM
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant='h2'
                        >
                            adresse
                        </Typography>
                        <Typography
                            variant='h3'
                        >
                            11 rue de Besançon
                        </Typography>
                        <Typography
                            variant='h3'
                        >
                            75000, Paris
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

        </ComponentWrapper>
    )
}