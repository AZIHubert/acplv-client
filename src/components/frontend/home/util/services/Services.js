import React, {
    useState,
    Fragment
} from 'react';

import SubComponentWrapper from '../../../util/SubComponentWrapper';

import Service from './util/Service';

export default () => {
    
    const [services] = useState([{
        title: 'SIGNALÉTIQUE EXTÉRIEUR',
        index: 0,
        items: [{
            title: 'KAKÉMONOS',
            index: 0
        }, {
            title: 'ADHÉSIFS MURAUX',
            index: 1
        }, {
            title: 'PLV',
            index: 2
        }, {
            title: 'MARQUAGE AU SOL',
            index: 3
        }, {
            title: 'STICKERS',
            index: 4
        }, {
            title: 'RELOOKING VITRINES',
            index: 5
        }, {
            title: 'PRÉSENTOIRS',
            index: 6
        }, {
            title: 'SIGNALÉTIQUE LUMINEUSE',
            index: 7
        }]
    }, {
        title: 'SIGNALÉTIQUE INTÉRIEUR',
        index: 1,
        items: [{
            title: 'ADHÉSIFS POUR VÉHICULES',
            index: 0
        }, {
            title: 'ENSEIGNES',
            index: 1
        }, {
            title: 'CAISSONS LUMINEUX',
            index: 2
        }, {
            title: 'PANNEAUX PUBLICITAIRES',
            index: 3
        }, {
            title: 'TOTEMS',
            index: 4
        }, {
            title: 'PLAQUES PLEXIGLASS',
            index: 5
        }]
    }, {
        title: 'DIGITAL',
        index: 2,
        items: [{
            title: 'BORNES TACTILES D’INTÉRIEUR',
            index: 0
        }, {
            title: 'BORNES TACTILES D’EXTÉRIEUR',
            index: 1
        }, {
            title: 'TABLES TACTILES',
            index: 2
        }]
    }]);
    return (
        <SubComponentWrapper
            title="nos services"
            hasBorder
            paddingTop
        >
            {services.map((service, i) => (
                <Fragment
                    key={i}
                >
                    <Service
                        service={service}
                        isLast={services.length === i + 1}
                    />
                </Fragment>
            ))}
        </SubComponentWrapper>
    )
}