import React from 'react';
import ParallaxVertical from '../../../../util/ParallaxVerticale';

import {
    Box
} from '@material-ui/core';

export default () => {
    console.log('image')
    return (
        <Box
            display="flex"
            justifyContent="center"
            style={{
                position: 'absolute',
                zIndex: '-1',
                top: 0,
                left: '50%',
                transform: 'translate3d(-50%, 0px, 0px)',
                width: '50%'
            }}
        >
            <ParallaxVertical
                ratio={-0.4}
            >
                <img
                    src="https://dummyimage.com/500x700/757575/000000&text=Header+Image"
                    style={{
                        width: '100%'
                    }}
                />
            </ParallaxVertical>
        </Box>
    )
}