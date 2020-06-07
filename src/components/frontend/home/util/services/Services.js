import React from 'react';

import SubComponentWrapper from '../../../util/SubComponentWrapper';

import Service from './util/Service';

export default ({serviceCats}) => {
    return (
        <SubComponentWrapper
            title="nos services"
            hasBorder
            paddingTop
        >
            {serviceCats.map((service, i) => (
                <Service
                    key={service._id}
                    service={service}
                    isLast={serviceCats.length === i + 1}
                />
            ))}
        </SubComponentWrapper>
    )
}