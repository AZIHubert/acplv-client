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
} from '@material-ui/core/styles'

import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(theme => ({
    wrapper: {
        paddingTop: theme.spacing(2)
    },
    typeItemsContainer: {
        paddingBottom: theme.spacing(2),
        position: 'relative'
    },
    typesLine: {
        backgroundColor: theme.palette.secondaryColor,
        width: '100%',
        height: 1,
        position: 'absolute'
    },
    typeItem: {
        cursor: 'pointer',
        paddingRight: theme.spacing(1),
        '&:hover, &.active': {
            color: theme.palette.tertiaryColor,
            textStrokeColor: 'transparent',
        },
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
}))

export default ({theme}) => {
    const classes = useStyles(theme)
    const isMobile = useMediaQuery({ query: '(max-width: 824px)' })
    const typesContainerRef = useRef(null)
    const allContainerRef = useRef(null)
    const [types] = useState([
        'KAKÉMONOS', 'STICKERS', 'PLAQUES PLEXIGLASS', 'BORNES TACTILES D’EXTÉRIEUR',
        'RELOOKING VITRINES'
    ])
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
    const [displayProjects, setDisplayProjects] = useState([...projects])
    const [typesLine, setTypesLine] = useState([]);
    const setLines = () => {
        const typesContainer = typesContainerRef.current
        const typesContainerHeight = typesContainer.getBoundingClientRect().height
        const typeHeight = allContainerRef.current.getBoundingClientRect().height
        const numberOfLine = Math.floor(typesContainerHeight / typeHeight)
        setTypesLine([])
        for(let i = 0; i < numberOfLine; i++){
            setTypesLine(prevState => [...prevState, typeHeight + i*typeHeight])
        }
    }
    useEffect(() => {
        document.fonts.ready.then(() => {
            setLines()
            window.addEventListener('resize', setLines)
        })
        return () => window.removeEventListener('resize', setLines)
    }, [])
    const reseFilter = e => {
        typesContainerRef.current.childNodes.forEach(e => e.classList.remove('active'))
        e.target.classList.add('active')
        setDisplayProjects([...projects])
    }
    const handleFilter = (type, e) => {
        typesContainerRef.current.childNodes.forEach(e => e.classList.remove('active'))
        e.target.classList.add('active')
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
                                    typesLine.map((top, i) => (
                                        <Box
                                            key={i}
                                            style={{top}}
                                            className={classes.typesLine}
                                        >
                                        </Box>
                                    ))
                                )}
                                <Typography
                                    variant="h5"
                                    className={`${classes.firstTypesItem} ${classes.typeItem} active`}
                                    onClick={reseFilter}
                                    ref={allContainerRef}
                                >
                                    All
                                </Typography>
                                {types.map((type, i) => (
                                    <Fragment
                                        key={i}
                                    >
                                        <Typography
                                            variant="h5"
                                            className={classes.typeItem}
                                            onClick={(e) => handleFilter(type, e)}
                                        >
                                            {type}
                                        </Typography>
                                    </Fragment>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                    <ProjectList
                        projects={projects}
                    />
                </Box>
            </SubComponentWrapper>
        </ComponentWrapper>
    )
}