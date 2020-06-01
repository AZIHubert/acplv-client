import React from 'react'

import ComponentWrapper from '../util/ComponentWrapper'

import AboutText from './util/AboutText'
import AboutServices from './util/AboutServices'

import Loader from '../loader/Loader';

import {
    useQuery
} from '@apollo/react-hooks';
import {
    FETCH_SERVICE_CATS_WITH_SERVICES,
    FETCH_ABOUT_GENERAL_QUERY
} from '../../../graphql/querys/index';

export default () => {
    const {
        loading: loadingServiceCats,
        data: dateServiceCats
    } = useQuery(FETCH_SERVICE_CATS_WITH_SERVICES);
    const {
        loading: loadingGeneral,
        data: dataGeneral
    } = useQuery(FETCH_ABOUT_GENERAL_QUERY);
    return (
        (!loadingServiceCats &&
         !loadingGeneral) ? (
            <ComponentWrapper
                title="à propos"
            >
                {dataGeneral.getGeneral.about && (
                    <AboutText
                        about={dataGeneral.getGeneral.about}
                    />
                )}
                {!!dateServiceCats.getServiceCatsWithServices && (
                    <AboutServices
                        serviceCats={dateServiceCats.getServiceCatsWithServices}
                    />
                )}
            </ComponentWrapper>
        ) : (
            <Loader />
        )
    )
}