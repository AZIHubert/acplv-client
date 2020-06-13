import React, { useState, useEffect } from 'react';

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

import ComponentWrapper from '../util/ComponentWrapper';

import WhoAreWe from './util/WhoAreWe';
import AboutUs from './util/AboutUs';
import WaitModal from '../util/WaitModal';

export default () => {
    const {loading, error, data} = useQuery(FETCH_GENERAL_QUERY);
    const [general, setGeneral] = useState({
        about: '',
        whoAreWeFirst: '',
        whoAreWeSecond: ''
    });
    const [saving, setSaving] = useState(false);
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

    const [editGeneral] = useMutation(EDIT_GENERAL_QUERY, {
        variables: { generalInput: general },
        update(){setSaving(false)},
        onError(err){
            console.log(err);
            setSaving(false);
        }
    });

    const handleChange = e => {
        e.persist();
        setGeneral(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };
    const handleSubmit = e => {
        e.preventDefault();
        setSaving(true);
        console.log(general)
        editGeneral();
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
            <WaitModal open={saving} />
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

const EDIT_GENERAL_QUERY = gql`
    mutation editGeneral(
        $generalInput: GeneralInput
    ) {
        editGeneral(
            generalInput: $generalInput
        ){
            about
            whoAreWeFirst
            whoAreWeSecond
        }
    }
`;