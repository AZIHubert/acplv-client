import React from 'react';

import SubComponentWrapper from '../../../util/SubComponentWrapper';

import Service from './util/Service';

export default ({serviceCats, isFirst, isLast}) => {
    return (
        <SubComponentWrapper
            title="nos services"
            hasBorder={!isFirst}
            paddingTop
            paddingBottom={isLast}
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