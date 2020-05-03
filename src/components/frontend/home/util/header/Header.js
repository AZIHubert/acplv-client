import React from 'react'

import SubComponentWrapper from '../../../util/SubComponentWrapper';
import HeaderImage from './util/HeaderImage'

import { useMediaQuery } from 'react-responsive';

import {
    Box
} from '@material-ui/core';

import ParallaxVertical from '../../../util/ParallaxVerticale';

import Title from '../../../util/Title';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        backgroundSize: '40%',
        [theme.breakpoints.down('xs')]: {
            backgroundSize: '50%',
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center'
    },
    titleContainer: {
        paddingBottom: theme.spacing(16)
    },
    whoAreWeContainer: {
        height: theme.spacing(17)
    },
    paddingBottom: {
        marginBottom: theme.spacing(5)
    },
    paddingLeft: {
        paddingLeft: theme.spacing(15),
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(3),
        },
    },
    subTitleContainer: {
        paddingBottom: theme.spacing(15),
    },
}))

export default ({theme}) => {
    const classes = useStyles(theme);
    const isMobile = useMediaQuery({ query: '(max-width: 824px)' });
    return (
        <SubComponentWrapper
            paddingTop
        >
            <div className={classes.container}>
                <div className={classes.titleContainer}>
                    <ParallaxVertical
                        ratio={-0.3}
                        verticale
                    >
                        <Title
                            variant="h1"
                            customClass={classes.paddingLeft}
                            title='acplv'
                            
                        />
                    </ParallaxVertical>
                    <ParallaxVertical
                        ratio={0.6}
                        verticale
                    >
                        <Title
                            variant="h1"
                            title="solutions globales"
                        />
                    </ParallaxVertical>
                    <ParallaxVertical
                        ratio={-0.5}
                        verticale
                    >
                        <Title
                            variant="h1"
                            title="en signalétique"
                        />
                    </ParallaxVertical>
                    <HeaderImage />
                </div>
                {isMobile ? (
                    <Box
                        className={classes.paddingBottom}
                    >
                        <Title
                            variant="h1"
                        >
                            qui sommes nous ?
                        </Title>
                    </Box>
                ) : (
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        className={`${classes.whoAreWeContainer} ${classes.paddingBottom}`}
                    >
                        <Title
                            variant="h1"
                            title="qui"
                        />
                        <Box
                            flexGrow="3"
                            alignSelf="flex-end"
                            textAlign="center"
                        >
                            <Title
                                variant="h1"
                                title="sommes"
                            />
                        </Box>
                        <Box
                            flexGrow="2"
                            textAlign="right"
                        >
                            <Title
                                variant="h1"
                                title="nous ?"
                            />
                        </Box>
                    </Box>
                )}
            </div>
        </SubComponentWrapper>
    )
}