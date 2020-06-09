import React from 'react';

import ComponentWrapper from '../util/ComponentWrapper';

import {
    Box,
    Typography
} from '@material-ui/core';

export default () => {
    return (
        <ComponentWrapper title="projects">
            <Box>
                <Typography variant="h2">
                    Types
                </Typography>
            </Box>
            <Box>
                <Typography variant="h2">
                    Projects
                </Typography>
            </Box>
        </ComponentWrapper>
    );
};