import React, { useEffect, useState } from 'react';

import ComponentWrapper from '../util/ComponentWrapper';

import Header from './util/header/Header';
import About from './util/about/About';
import Service from './util/services/Services';
import Project from './util/projects/Projects';
import Clients from './util/clients/Clients';
import Footer from './util/footer/Footer';

import Loader from '../loader/Loader';

import {
    useQuery
} from '@apollo/react-hooks';
import {
    FETCH_HOME_GENERAL_QUERY,
    FETCH_FRONT_PROJECTS_QUERY,
    FETCH_FRONT_CLIENT_QUERY,
    FETCH_FRONT_SERVICE_CATS
} from '../../../graphql/querys/index';

export default () => {
    const [general, setGeneral] = useState({
        whoAreWeFirst: '',
        whoAreWeSecond: '',
        email: ''
    });
    const [clients, setClients] = useState([]);
    const [projects, setProjects] = useState([]);
    const [serviceCats, setServiceCats] = useState([]);

    const {loading: loadingGeneral, data: dataGeneral, error: errorGeneral} = useQuery(FETCH_HOME_GENERAL_QUERY);
    const {loading: loadingClients, data: dataClients, error: errorClients} = useQuery(FETCH_FRONT_CLIENT_QUERY);
    const {loading: loadingProject, data: dataProjects, error: errorProjects} = useQuery(FETCH_FRONT_PROJECTS_QUERY);
    const {loading: loadingServiceCats, data: dataServiceCats, error: errorServiceCats} = useQuery(FETCH_FRONT_SERVICE_CATS);

    useEffect(() => {
        const onCompleted = data => {
            setGeneral({
                whoAreWeFirst: data.getGeneral.whoAreWeFirst ? data.getGeneral.whoAreWeFirst : '',
                whoAreWeSecond: data.getGeneral.whoAreWeSecond ? data.getGeneral.whoAreWeSecond : '',
                email: data.getGeneral.email ? data.getGeneral.email : ''
            })
        }
        if (onCompleted && !loadingGeneral && !errorGeneral) onCompleted(dataGeneral);
    }, [loadingGeneral, dataGeneral, errorGeneral]);

    useEffect(() => {
        const onCompleted = data => setClients(data.getClients);
        if (onCompleted && !loadingClients && !errorClients) onCompleted(dataClients);
    }, [loadingClients, dataClients, errorClients]);

    useEffect(() => {
        const onCompleted = data => setProjects(data.getProjects.filter(project => project.display).slice(0, 6));
        if (onCompleted && !loadingProject && !errorProjects) onCompleted(dataProjects);
    }, [loadingProject, dataProjects, errorProjects]);

    useEffect(() => {
        const onCompleted = data => setServiceCats(data.serviceCats);
        if (onCompleted && !loadingServiceCats && !errorServiceCats) onCompleted(dataServiceCats);
    }, [loadingServiceCats, dataServiceCats, errorServiceCats]);

    return (
        (!loadingClients && !loadingProject && !loadingGeneral && !loadingServiceCats) ? (
            <ComponentWrapper>
                <Header whoAreWeExist={(!!general.whoAreWeFirst || !!general.whoAreWeSecond)} />
                {(!!general.whoAreWeFirst || !!general.whoAreWeSecond) &&
                    <About
                        whoAreWeFirst={general.whoAreWeFirst}
                        whoAreWeSecond={general.whoAreWeSecond}
                    />
                }
                {serviceCats.length && <Service serviceCats={serviceCats} /> }
                {projects.length && <Project projects={projects} /> }
                {clients.length && <Clients clients={clients} /> }
                {!!general.email && <Footer email={dataGeneral.getGeneral.email} /> }
            </ComponentWrapper>
        ) : (
            <Loader />
        )
    )
}