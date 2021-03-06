import React, { useState, useEffect } from 'react';

import SubComponentWrapper from '../util/SubComponentWrapper';
import ComponentWrapper from '../util/ComponentWrapper';

import ContactForm from './util/ContactForm';
import ContactInfo from './util/ContactInfos';

import {
    Grid
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

import { useMediaQuery } from 'react-responsive';

import Loader from '../loader/Loader';

import {
    useQuery
} from '@apollo/react-hooks';
import {
    FETCH_CONTACT_GENERAL_QUERY
} from '../../../graphql/querys/index';

const useStyles = makeStyles(theme => ({
    paddingLeft: {
        paddingLeft: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2)
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(0)
        },
    },
    paddingRight: {
        paddingRight: theme.spacing(5),
        paddingTop: theme.spacing(10),
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(2),
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: theme.spacing(6),
            paddingRight: theme.spacing(0),
        },
    }
}))


export default ({theme}) => {
    const classes = useStyles(theme);

    const [general, setGeneral] = useState({
        email: '',
        phone: '',
        adressStreet: '',
        adressCity: '',
        facebookLink: '',
        linkedinLink: '',
        instagramLink: ''
    })

    const {loading, data, error} = useQuery(FETCH_CONTACT_GENERAL_QUERY);
    const isVerticalMobile = useMediaQuery({query: '(max-width: 959.95px)'});

    useEffect(() => {
        const onCompleted = data => {
            setGeneral({
                email: data.getGeneral.email ? data.getGeneral.email : '',
                phone: data.getGeneral.phone ? data.getGeneral.phone : '',
                adressStreet: data.getGeneral.adressStreet ? data.getGeneral.adressStreet : '',
                adressCity: data.getGeneral.adressCity ? data.getGeneral.adressCity : '',
                facebookLink: data.getGeneral.facebookLink ? data.getGeneral.facebookLink : '',
                linkedinLink: data.getGeneral.linkedinLink ? data.getGeneral.linkedinLink : '',
                instagramLink: data.getGeneral.instagramLink ? data.getGeneral.instagramLink : '',
            })
        }
        if (onCompleted && !loading && !error) onCompleted(data);
    }, [loading, data, error]);

    return (
        !loading ? (
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
                            direction={isVerticalMobile ? "column-reverse" : 'row'}
                            >
                            {(
                                !!general.email ||
                                !!general.phone ||
                                !!general.adressStreet ||
                                !!general.facebookLink ||
                                !!general.linkedinLink ||
                                !!general.instagramLink
                            ) && (
                                <Grid
                                    item
                                    xs={12} md={6}
                                    className={classes.paddingRight}
                                >
                                    <ContactInfo
                                        email={general.email}
                                        phone={general.phone}
                                        adressStreet={general.adressStreet}
                                        adressCity={general.adressCity}
                                        facebookLink={general.facebookLink}
                                        linkedinLink={general.linkedinLink}
                                        instagramLink={general.instagramLink}   
                                    />
                                </Grid>
                            )}
                            {!!general.email && (
                                <Grid
                                    item
                                    xs={12} md={6}
                                    className={classes.paddingLeft}
                                >
                                    <ContactForm />
                                </Grid>
                            )}
                        </Grid>
                    
                </SubComponentWrapper>
            </ComponentWrapper>
        ) : (
            <Loader />
        )
    )
}