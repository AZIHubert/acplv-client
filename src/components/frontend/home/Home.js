import React from 'react';

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
    const {loading: loadingGeneral, data: dataGeneral} = useQuery(FETCH_HOME_GENERAL_QUERY);
    const {loading: loadingClient, data: dataClients} = useQuery(FETCH_FRONT_CLIENT_QUERY);
    const {loading: loadingProject, data: dataProjects} = useQuery(FETCH_FRONT_PROJECTS_QUERY);
    const {loading: loadingServiceCats, data: dataProjectCats} = useQuery(FETCH_FRONT_SERVICE_CATS);
    if(loadingServiceCats) console.log(dataProjectCats)
    return (
        (!loadingClient &&
         !loadingProject &&
         !loadingClient &&
         !loadingGeneral &&
         !loadingServiceCats) ? (
            <ComponentWrapper>
                <Header
                    whoAreWeExist={(!!dataGeneral.getGeneral.whoAreWeFirst || !!dataGeneral.getGeneral.whoAreWeSecond)}
                />
                {(!!dataGeneral.getGeneral.whoAreWeFirst || !!dataGeneral.getGeneral.whoAreWeSecond) &&
                    <About
                        whoAreWeFirst={dataGeneral.getGeneral.whoAreWeFirst}
                        whoAreWeSecond={dataGeneral.getGeneral.whoAreWeSecond}
                    />
                }
                {(!!dataProjectCats.getServiceCats.length) && (
                    <Service serviceCats={dataProjectCats.getServiceCats} />
                )}
                {(!!dataProjects.getProjects.length) && (
                    <Project projects={dataProjects.getProjects} />
                )}
                {(!!dataClients.getClients.length) && (
                    <Clients clients={dataClients.getClients} />
                )}
                {(!!dataGeneral.getGeneral.email) && (
                    <Footer email={dataGeneral.getGeneral.email} />
                )}
            </ComponentWrapper>
        ) : (
            <Loader />
        )
    )
}