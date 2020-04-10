import React from 'react'

import SubComponentWrapper from '../util/SubComponentWrapper'
import ComponentWrapper from '../util/ComponentWrapper'

import ContactForm from './util/ContactForm'
import ContactInfo from './util/ContactInfos'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(0, 10)
    },
    paddingLeft: {
        paddingLeft: theme.spacing(3)
    },
    paddingRight: {
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(8)
    }
}))


export default ({theme}) => {
    const classes = useStyles(theme)
    return (
        <ComponentWrapper
            title="contact"
        >
            <SubComponentWrapper>
                <Grid
                    container
                    className={classes.container}
                >
                    <Grid
                        item
                        xs={6}
                        className={classes.paddingRight}
                    >
                        <Box
                className={classes.contactContainer}
            >
                <Typography
                    variant='body2'
                >
                    téléphone
                </Typography>
                <Typography
                    variant='body1'
                >
                    +33.08.11.11.11.11
                </Typography>
            </Box>
            <Box
                className={classes.contactContainer}
            >
                <Typography
                    variant='body2'
                >
                    Email
                </Typography>
                <Typography
                    variant='body1'
                >
                    CONTACT@ACPLV.COM
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant='body2'
                >
                    adresse
                </Typography>
                <Typography
                    variant='body1'
                >
                    11 rue de Besançon
                </Typography>
                <Typography
                    variant='body1'
                >
                    75000, Paris
                </Typography>
            </Box>
                        {/* <ContactInfo /> */}
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        className={classes.paddingLeft}
                    >
                        <ContactForm />
                    </Grid>
                </Grid>
            </SubComponentWrapper>
        </ComponentWrapper>
    )
}