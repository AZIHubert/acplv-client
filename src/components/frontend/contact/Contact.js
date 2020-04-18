import React from 'react'

import SubComponentWrapper from '../util/SubComponentWrapper'
import ComponentWrapper from '../util/ComponentWrapper'

import ContactForm from './util/ContactForm'
import ContactInfo from './util/ContactInfos'

import {
    Grid
} from '@material-ui/core'

import useWindowSize from '../../../hooks/useWindowSize'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(0, 10),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0)
        },
    },
    paddingLeft: {
        paddingLeft: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(1)
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(0)
        },
    },
    paddingRight: {
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(10),
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(1),
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: theme.spacing(6),
            paddingRight: theme.spacing(0),
        },
    }
}))


export default ({theme}) => {
    const classes = useStyles(theme)
    const {width} = useWindowSize();
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
                    direction={width <= 600 ? "column-reverse" : 'row'}
                >
                    <Grid
                        item
                        xs={12} sm={6}
                        className={classes.paddingRight}
                    >
                        <ContactInfo />
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={6}
                        className={classes.paddingLeft}
                    >
                        <ContactForm />
                    </Grid>
                </Grid>
            </SubComponentWrapper>
        </ComponentWrapper>
    )
}