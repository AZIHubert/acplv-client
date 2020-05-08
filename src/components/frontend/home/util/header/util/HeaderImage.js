import React from 'react';
// import ParallaxVertical from '../../../../util/ParallaxVerticale';

import {
    Box
} from '@material-ui/core';

export default () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            style={{
                // position: 'absolute',
                marginTop: '-10rem',
                maxHeight: '100vh',
            }}
        >
            {/* <ParallaxVertical
                ratio={-0.4}
            > */}
                <img
                    src="https://dummyimage.com/500x700/757575/000000&text=Header+Image"
                    style={{
                        width: 'auto'
                    }}
                />
            {/* </ParallaxVertical> */}
        </Box>
    )
}