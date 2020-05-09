import React, {
    useState,
    useRef,
    useEffect,
    Fragment
} from 'react'

import SubComponentWrapper from '../util/SubComponentWrapper'
import ComponentWrapper from '../util/ComponentWrapper'
import ProjectList from '../util/ProjectList'

import {
    Grid,
    Box,
    Typography
} from '@material-ui/core'

import {
    makeStyles
} from '@material-ui/core/styles';

import Line from '../util/Line';

import useOnScreen from '../../../hooks/useOnScreen';

import {
    useTrail,
    animated
} from 'react-spring';

import { useMediaQuery } from 'react-responsive';

const config = { mass: 5, tension: 2000, friction: 200 };

const AnimatedBox = animated(Box);
const AnimatedTypography = animated(Typography);


const useStyles = makeStyles(theme => ({
    wrapper: {
        paddingTop: theme.spacing(2)
    },
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
    },
    
    separator: {
        textStrokeWidth: 0.5,
        textStrokeColor: theme.palette.secondaryColor,
        color: 'transparent',
        padding: theme.spacing(0, 1),
        [theme.breakpoints.down('md')]: {
            textStrokeWidth: 'unset',
            color: theme.palette.secondaryColor
        },
    },
    projectsContainer: {
        paddingTop: theme.spacing(10),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(7)
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(4)
        }
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme)
    const isMobile = useMediaQuery({ query: '(max-width: 824px)' });
    const typesContainerRef = useRef(null);
    const allContainerRef = useRef(null);
    const onScreen = useOnScreen(typesContainerRef, "-70px 0px 0px 0px", true);
    const types = [
        'KAKÉMONOS', 'STICKERS', 'PLAQUES PLEXIGLASS', 'BORNES TACTILES D’EXTÉRIEUR',
        'RELOOKING VITRINES'
    ];
    const [projects] = useState([{
        title: 'project 1',
        index: 0,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+1',
        type: types[(Math.random() * types.length) | 0]
    }, {
        title: 'project 2',
        index: 1,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+2',
        type: types[(Math.random() * types.length) | 0]
    }, {
        title: 'project 3',
        index: 2,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+3',
        type: types[(Math.random() * types.length) | 0]
    }, {
        title: 'project 4',
        index: 3,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+4',
        type: types[(Math.random() * types.length) | 0]
    }, {
        title: 'project 5',
        index: 4,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+5',
        type: types[(Math.random() * types.length) | 0]
    }, {
        title: 'project 6',
        index: 5,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+6',
        type: types[(Math.random() * types.length) | 0]
    }, {
        title: 'project 7',
        index: 6,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+7',
        type: types[(Math.random() * types.length) | 0]
    }, {
        title: 'project 8',
        index: 7,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+8',
        type: [types[(Math.random() * types.length) | 0]]
    }, {
        title: 'project 9',
        index: 8,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+9',
        type: types[(Math.random() * types.length) | 0]
    }, {
        title: 'project 10',
        index: 9,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+10',
        type: types[(Math.random() * types.length) | 0]
    }, {
        title: 'project 11',
        index: 10,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+11',
        type: types[(Math.random() * types.length) | 0]
    }, {
        title: 'project 12',
        index: 11,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+12',
        type: types[(Math.random() * types.length) | 0]
    },
    {
        title: 'project 13',
        index: 12,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+13',
        type: types[(Math.random() * types.length) | 0]
    }
    ])
    types.unshift('all');
    const [displayProjects, setDisplayProjects] = useState([...projects])
    const [typesLine, setTypesLine] = useState([]);
    const setLines = () => {
        const typesContainer = typesContainerRef.current
        const typesContainerHeight = typesContainer.getBoundingClientRect().height
        const typeHeight = allContainerRef.current.getBoundingClientRect().height
        const numberOfLine = Math.ceil(typesContainerHeight / typeHeight)
        setTypesLine([])
        for(let i = 0; i < numberOfLine; i++){
            setTypesLine(prevState => [...prevState, typeHeight + i*typeHeight])
        }
    }
    useEffect(() => {
        setLines();
        window.addEventListener('resize', setLines);
        return () => window.removeEventListener('resize', setLines)
    }, []);
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
    const resetFilter = e => {
        typesContainerRef.current.childNodes.forEach(e => e.classList.remove('active'))
        e.target.parentElement.classList.add('active')
        setDisplayProjects([...projects])
    }
    const handleFilter = (type, e) => {
        typesContainerRef.current.childNodes.forEach(e => e.classList.remove('active'))
        e.target.parentElement.classList.add('active')
        setDisplayProjects([...projects.filter(project => project.type === type)])
    }
    return (
        <ComponentWrapper
            title="projets"
        >
            <SubComponentWrapper
                paddingBottom
            >
                <Box
                    className={classes.wrapper}
                >
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
                                        key={i}
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
                                                {types[i]}
                                            </AnimatedTypography>
                                        :
                                            <AnimatedTypography
                                                variant="h5"
                                                className={classes.typeItem}
                                                onClick={e => handleFilter(types[i], e)}
                                                style={{
                                                    opacity,
                                                    transform: yTypography.interpolate(y => `translate3d(0px, ${y}%, 0px)`)
                                                }}
                                            >
                                                {types[i]}
                                            </AnimatedTypography>
                                        }
                                    </AnimatedBox>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                    <ProjectList
                        projects={displayProjects}
                    />
                </Box>
            </SubComponentWrapper>
        </ComponentWrapper>
    )
}