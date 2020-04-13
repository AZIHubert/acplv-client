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
            <SubComponentWrapper
                paddingTop
                paddingBottom
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
                        <ContactInfo />
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