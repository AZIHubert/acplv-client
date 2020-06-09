import React from 'react';

import ComponentWrapper from '../util/ComponentWrapper';
import Projects from './util/projects/Projects';
import Types from './util/types/Types';


export default () => {
    return (
        <ComponentWrapper title="projects">
            <Types />
            <Projects />
        </ComponentWrapper>
    );
};