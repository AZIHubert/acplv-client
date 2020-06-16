import React, { useState, useEffect } from 'react'

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

    const [general, setGeneral] = useState({ about: '' });
    const [serviceCats, setServiceCats] = useState([]);

    const { loading: loadingGeneral, data: dataGeneral, error: errorGeneral } = useQuery(FETCH_ABOUT_GENERAL_QUERY);
    const { loading: loadingServiceCats, data: dataServiceCats, error: errorServiceCats } = useQuery(FETCH_SERVICE_CATS_WITH_SERVICES);

    useEffect(() => {
        const onCompleted = data => {
            setGeneral({
                about: data.getGeneral.about ? data.getGeneral.about : ''
            })
        }
        if (onCompleted && !loadingGeneral && !errorGeneral) onCompleted(dataGeneral);
    }, [loadingGeneral, dataGeneral, errorGeneral]);

    useEffect(() => {
        const onCompleted = data => setServiceCats(data.getServiceCatsWithServices);
        if (onCompleted && !loadingServiceCats && !errorServiceCats) onCompleted(dataServiceCats);
    }, [loadingServiceCats, dataServiceCats, errorServiceCats]);

    return (
        (!loadingServiceCats &&
         !loadingGeneral) ? (
            <ComponentWrapper title="à propos" >
                {!!general.about && <AboutText about={general.about} /> }
                {!!serviceCats.length && (
                    <AboutServices serviceCats={serviceCats}
                        isFirst={!general.about}
                    />
                )}
            </ComponentWrapper>
        ) : (
            <Loader />
        )
    )
}