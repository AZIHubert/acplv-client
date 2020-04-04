import React from 'react'

import ComponentWrapper from '../util/ComponentWrapper'

import AboutText from './util/AboutText'
import AboutServices from './util/AboutServices'


export default ({theme}) => {
    return (
        <ComponentWrapper
            title="à propos"
        >
            <AboutText />
            <AboutServices />
        </ComponentWrapper>
    )
}