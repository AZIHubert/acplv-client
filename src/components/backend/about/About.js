import React, { useState, useEffect } from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import ComponentWrapper from '../util/ComponentWrapper';

import WhoAreWe from './util/WhoAreWe';
import AboutUs from './util/AboutUs';

export default () => {
    const {loading, error, data} = useQuery(FETCH_GENERAL_QUERY);
    const [general, setGeneral] = useState({
        about: '',
        whoAreWeFirst: '',
        whoAreWeSecond: ''
    });
    useEffect(() => {
        const onCompleted = data => {
            setGeneral({
                about: data.getGeneral.about ? data.getGeneral.about : '',
                whoAreWeFirst: data.getGeneral.whoAreWeFirst ? data.getGeneral.whoAreWeFirst : '',
                whoAreWeSecond: data.getGeneral.whoAreWeSecond ? data.getGeneral.whoAreWeSecond : ''
            })
        }
        if (onCompleted) {
            if (onCompleted && !loading && !error) {
              onCompleted(data);
            }
        }
    }, [loading, data, error]);
    const handleChange = e => {
        e.persist();
        setGeneral(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(general);
    }
    return (
        <ComponentWrapper title="about" isForm handleSubmit={handleSubmit}>
            {!loading && (
                <>
                    <WhoAreWe
                        whoAreWeFirst={general.whoAreWeFirst}
                        whoAreWeSecond={general.whoAreWeSecond}
                        handleChange={handleChange}
                    />
                    <AboutUs
                        about={general.about}
                        handleChange={handleChange}
                    />
                </>
            )}
        </ComponentWrapper>
    );
};

const FETCH_GENERAL_QUERY = gql`
    {
        getGeneral {
            about
            whoAreWeFirst
            whoAreWeSecond
        }
    }
`;