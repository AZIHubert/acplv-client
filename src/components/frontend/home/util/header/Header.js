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
    whoAreWeContainer: {
        [theme.breakpoints.up('sm')]: {
            height: theme.spacing(17),
        },
        [theme.breakpoints.up('1350')]: {
            height: theme.spacing(50),
        },
        marginTop: '-10rem'
    },
    paddingBottom: {
        marginBottom: theme.spacing(5)
    },
    paddingLeft: {
        paddingLeft: theme.spacing(10),
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(0),
        },
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
                            title="des solutions"
                        />
                    </ParallaxVertical>
                    <ParallaxVertical
                        ratio={0.6}
                        verticale
                    >
                        <Title
                            variant="h1"
                            title="global"
                            customClass={classes.paddingLeft}
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
                </div>
                <HeaderImage />
                
                {isMobile ? (
                    // <ParallaxVertical
                    //     ratio={0.1}
                    //     relativeToPercent={50}
                    // >
                        <Box
                            className={`${classes.whoAreWeContainer} ${classes.paddingBottom}`}
                        >
                            <Title
                                variant="h1"
                                title="qui sommes nous ?"
                            />
                        </Box>
                    // </ParallaxVertical>
                ) : (
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        className={`${classes.whoAreWeContainer} ${classes.paddingBottom}`}
                    >
                        {/* <ParallaxVertical
                            ratio={0.07}
                            relativeToPercent={50}
                        > */}
                            <Title
                                variant="h1"
                                title="qui"
                            />
                        {/* </ParallaxVertical> */}
                        <Box
                            flexGrow="3"
                            alignSelf="flex-end"
                            textAlign="center"
                        >
                            {/* <ParallaxVertical
                                ratio={-0.07}
                                relativeToPercent={50}
                            > */}
                                <Title
                                    variant="h1"
                                    title="sommes"
                                />
                            {/* </ParallaxVertical> */}
                        </Box>
                        <Box
                            flexGrow="2"
                            textAlign="right"
                        >
                            {/* <ParallaxVertical
                                ratio={0.15}
                                relativeToPercent={50}
                            > */}
                                <Title
                                    variant="h1"
                                    title="nous ?"
                                />
                            {/* </ParallaxVertical> */}
                        </Box>
                    </Box>
                )}
            </div>
        </SubComponentWrapper>
    )
}