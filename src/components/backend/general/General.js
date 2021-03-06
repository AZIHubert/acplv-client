import React, { useState, useEffect } from 'react';

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

import ComponentWrapper from '../util/ComponentWrapper';

import ChangeColor from './util/ChangeColor';
import Email from './util/Email';
import Phone from './util/Phone';
import Adress from './util/Adress';
import SocialMedias from './util/SocialMedias';
import WaitModal from '../util/WaitModal';

export default () => {
    const {loading, error, data} = useQuery(FETCH_GENERAL_QUERY);
    const [general, setGeneral] = useState({
        primaryColor: '',
        secondaryColor: '',
        tertiaryColor: '',
        email: '',
        phone: '',
        adressStreet: '',
        adressCity: '',
        facebookLink: '',
        instagramLink: '',
        linkedinLink: ''
    });
    const [saving, setSaving] = useState(false);
    useEffect(() => {
        const onCompleted = data => {
            setGeneral({
                primaryColor: data.getGeneral.primaryColor ? data.getGeneral.primaryColor : '',
                secondaryColor: data.getGeneral.secondaryColor ? data.getGeneral.secondaryColor : '',
                tertiaryColor: data.getGeneral.tertiaryColor ? data.getGeneral.tertiaryColor : '',
                email: data.getGeneral.email ? data.getGeneral.email : '',
                phone: data.getGeneral.phone ? data.getGeneral.phone : '',
                adressStreet: data.getGeneral.adressStreet ? data.getGeneral.adressStreet : '',
                adressCity: data.getGeneral.adressCity ? data.getGeneral.adressCity : '',
                facebookLink: data.getGeneral.facebookLink ? data.getGeneral.facebookLink : '',
                instagramLink: data.getGeneral.instagramLink ? data.getGeneral.instagramLink : '',
                linkedinLink: data.getGeneral.linkedinLink ? data.getGeneral.linkedinLink : '',
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
        update(proxy, result){
            const data = proxy.readQuery({
                query: FETCH_GENERAL_QUERY
            });
            const newGeneral = result.data.editGeneral;
            proxy.writeQuery({
                query: FETCH_GENERAL_QUERY,
                data: {getGeneral: {
                    ...data.getGeneral,
                    ...newGeneral
                }}
            });
            setSaving(false);
        },
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
        editGeneral();
    }
    return (
        <ComponentWrapper title="general" isForm handleSubmit={handleSubmit}>
            {!loading && (
                <>
                    <ChangeColor
                        primaryColor={general.primaryColor}
                        secondaryColor={general.secondaryColor}
                        tertiaryColor={general.tertiaryColor}
                        handleChange={handleChange}
                    />
                    <Email
                        email={general.email}
                        handleChange={handleChange}
                    />
                    <Phone
                        phone={general.phone}
                        handleChange={handleChange}
                    />
                    <Adress
                        adressCity={general.adressCity}
                        adressStreet={general.adressStreet}
                        handleChange={handleChange}
                    />
                    <SocialMedias
                        facebookLink={general.facebookLink}
                        linkedinLink={general.linkedinLink}
                        instagramLink={general.instagramLink}
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
        getGeneral{
            adressCity
            adressStreet
            email
            facebookLink
            linkedinLink
            instagramLink
            phone
            primaryColor
            secondaryColor
            tertiaryColor
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
            adressCity
            adressStreet
            email
            facebookLink
            linkedinLink
            instagramLink
            phone
            primaryColor
            secondaryColor
            tertiaryColor
        }
    }
`;