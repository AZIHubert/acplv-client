import React from 'react';

import ComponentWrapper from '../util/ComponentWrapper';

import ChangeColor from './util/ChangeColor';
import Email from './util/Email';
import Phone from './util/Phone';
import SocialMedias from './util/SocialMedias';

export default () => {
    return (
        <ComponentWrapper title="general" isForm>
            <ChangeColor />
            <Email />
            <Phone />
            <SocialMedias />
        </ComponentWrapper>
    );
};