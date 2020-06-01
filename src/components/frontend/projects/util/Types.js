import React, {
    useRef,
    useState,
    useEffect
} from 'react';

import useOnScreen from '../../../../hooks/useOnScreen';

import {
    Grid,
    Box,
    Typography
} from '@material-ui/core';

import {
    useTrail,
    animated
} from 'react-spring';

import {
    makeStyles
} from '@material-ui/core/styles';

import { useMediaQuery } from 'react-responsive';

const config = { mass: 5, tension: 2000, friction: 200 };
const AnimatedBox = animated(Box);
const AnimatedTypography = animated(Typography);

const useStyles = makeStyles(theme => ({
    typeItemsContainer: {
        paddingBottom: theme.spacing(10),
        position: 'relative'
    },
    lineContainer: {
        position: 'absolute',
        width: '100%',
        height: 2
    },
    line: {
        height: '100%',
        backgroundColor: theme.palette.secondaryColor
    },
    outerContainer: {
        overflow: 'hidden',
        '&:hover h5, &.active h5': {
            color: theme.palette.tertiaryColor,
            textStrokeColor: theme.palette.tertiaryColor,
        },
    },
    typeItem: {
        fontFamily: 'GillSansBold',
        lineHeight: 1.4,
        paddingRight: theme.spacing(1),
        '&:after': {
            content: '"\\00a0* "',
            color: theme.palette.primaryColor,
            textStrokeWidth: 1,
            textStrokeColor: theme.palette.secondaryColor,
        },
        [theme.breakpoints.down('sm')]: {
            textStrokeWidth: 'unset',
            color: theme.palette.secondaryColor,
            '&:after': {
                color: theme.palette.secondaryColor,
                textStrokeWidth: 'unset',
            }
        },
        transition: theme.transitions.create(['color', 'text-stroke-color'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest
        }),
    }
}));

export default ({filterProjects, theme, usedTypes}) => {
    const classes = useStyles(theme);
    const types = [
        {title: 'all', _id: 'all'},
        ...usedTypes
    ];
    const [typesLine, setTypesLine] = useState([]);
    const typesContainerRef = useRef(null);
    const allContainerRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 824px)' });
    const onScreen = useOnScreen(typesContainerRef, "-70px 0px 0px 0px", true);
    const setLines = () => {
        const typesContainer = typesContainerRef.current;
        const typesContainerHeight = typesContainer.getBoundingClientRect().height;
        const typeHeight = allContainerRef.current.getBoundingClientRect().height;
        const numberOfLine = Math.ceil(typesContainerHeight / typeHeight);
        setTypesLine([]);
        for(let i = 0; i < numberOfLine; i++){
            setTypesLine(prevState => [...prevState, typeHeight + i*typeHeight])
        }
    }
    useEffect(() => {
        setLines();
        window.addEventListener('resize', setLines);
        return () => window.removeEventListener('resize', setLines);
    }, []);
    const resetFilter = e => {
        typesContainerRef.current.childNodes.forEach(e => e.classList.remove('active'))
        e.target.parentElement.classList.add('active')
        filterProjects('all')
    };
    const handleFilter = (type, e) => {
        typesContainerRef.current.childNodes.forEach(e => e.classList.remove('active'))
        e.target.parentElement.classList.add('active')
        filterProjects(type)
    };
    const typesTrail = useTrail(types.length, {
        config,
        opacity: onScreen ? 1 : 0.5,
        yBox: onScreen ? 0 : 10,
        yTypography: onScreen ? 0 : 75,
    });
    const linesTrail = useTrail(typesLine.length, {
        width: onScreen ? '100%' : '0%',
        opacity: onScreen ? 1 : 0,
        config
    });
    return (
        <Grid
            container
            className={classes.typeItemsContainer}
        >
            <Grid
                item
                xs={12}
            >
                <Box
                    display="flex"
                    flexWrap="wrap"
                    ref={typesContainerRef}
                >
                    {isMobile ? null : (
                        linesTrail.map(({width, opacity}, i) => {
                            return (
                                <Box
                                    key={i}
                                    display="flex"
                                    className={classes.lineContainer}
                                    style={{top: typesLine[i]}}
                                >
                                    <AnimatedBox
                                        className={classes.line}
                                        style={{width, opacity}}
                                    >
                                    </AnimatedBox>
                                </Box>
                            )
                        })
                    )}
                    {typesTrail.map(({yBox, yTypography,  opacity}, i) => (
                        <AnimatedBox
                            key={types[i]._id}
                            className={`${classes.outerContainer} ${!i ? 'active' : ''}`}
                            style={{
                                transform: yBox.interpolate(y => `translate3d(0px, -${y}px, 0px)`)
                            }}
                        >
                            {!i ?
                                <AnimatedTypography
                                    variant="h5"
                                    className={`${classes.firstTypesItem} ${classes.typeItem}`}
                                    ref={allContainerRef}
                                    onClick={resetFilter}
                                    style={{
                                        opacity,
                                        transform: yTypography.interpolate(y => `translate3d(0px, ${y}%, 0px)`)
                                    }}
                                >
                                    {types[i].title}
                                </AnimatedTypography>
                            :
                                <AnimatedTypography
                                    variant="h5"
                                    className={classes.typeItem}
                                    onClick={e => handleFilter(types[i]._id, e)}
                                    style={{
                                        opacity,
                                        transform: yTypography.interpolate(y => `translate3d(0px, ${y}%, 0px)`)
                                    }}
                                >
                                    {types[i].title}
                                </AnimatedTypography>
                            }
                        </AnimatedBox>
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
};