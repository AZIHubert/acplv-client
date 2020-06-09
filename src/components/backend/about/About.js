import React from 'react';

import ComponentWrapper from '../util/ComponentWrapper';

import WhoAreWe from './util/WhoAreWe';
import AboutUs from './util/AboutUs';

import {
    Box,
    Typography
} from '@material-ui/core';

export default () => {
    return (
        <ComponentWrapper title="about" isForm>
            <WhoAreWe />
            <AboutUs />
        </ComponentWrapper>
    );
};