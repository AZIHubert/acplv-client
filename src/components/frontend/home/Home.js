import React from 'react';

import ComponentWrapper from '../util/ComponentWrapper';

import Header from './util/header/Header';
import About from './util/about/About';
import Service from './util/services/Services';
import Project from './util/projects/Projects';
import Clients from './util/clients/Clients';
import Footer from './util/footer/Footer';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    headerContainer: {
        overflowX: 'hidden'
    }
}))

export default () => {
    return (
        <ComponentWrapper>
            <Header />
            <About />
            <Service />
            <Project />
            <Clients />
            <Footer />
        </ComponentWrapper>
    )
}