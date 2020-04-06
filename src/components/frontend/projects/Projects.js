import React, {useState, useRef} from 'react'

import SubComponentWrapper from '../util/SubComponentWrapper'
import ComponentWrapper from '../util/ComponentWrapper'
import ProjectThumb from './util/ProjectThumb'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    typeItemsContainer: {
        paddingBottom: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.secondaryColor}`
    },
    typeItem: {
        paddingRight: theme.spacing(1),
        cursor: 'pointer',
        '&:hover, &.active': {
            color: theme.palette.tertiaryColor
        }
    },
    firstTypesItem: {
        '&:after': {
            content: '","',
            color: theme.palette.secondaryColor
        }
    },
    lastTypesItem: {
        '&:after': {
            content: '"."',
            color: theme.palette.secondaryColor
        },
    },
    projectsContainer: {
        paddingTop: theme.spacing(10)
    },
    evenGrid: {
        paddingRight: theme.spacing(8)
    },
    oddGrid: {
        paddingTop: theme.spacing(8),
        paddingLeft: theme.spacing(8)
    }
}))

export default ({theme}) => {
    const classes = useStyles(theme)
    const typesContainerRef = useRef(null)
    const [types] = useState([
        'KAKÉMONOS', 'STICKERS', 'PLAQUES PLEXIGLASS', 'BORNES TACTILES D’EXTÉRIEUR',
        'RELOOKING VITRINES'
    ])
    const [projects, setProjects] = useState([{
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
    }, {
        title: 'project 13',
        index: 12,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+13',
        type: types[(Math.random() * types.length) | 0]
    }])
    const [displayProjects, setDisplayProjects] = useState([...projects])
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
            doublePaddingBottom
        >
            <SubComponentWrapper>
                <Grid
                    container
                    className={classes.typeItemsContainer}
                >
                    <Grid
                        item
                        xs={10}
                    >
                        <Box
                            display="flex"
                            flexWrap="wrap"
                            ref={typesContainerRef}
                        >
                            <Typography
                                variant="h3"
                                className={`${classes.firstTypesItem} ${classes.typeItem} active`}
                                onClick={reseFilter}
                            >
                                All
                            </Typography>
                            {types.map((type, i) => (
                                <Typography
                                    variant="h3"
                                    key={type}
                                    className={
                                        `${i !== types.length -1 ? classes.firstTypesItem : classes.lastTypesItem}
                                        ${classes.typeItem}`
                                    }
                                    onClick={(e) => handleFilter(type, e)}
                                >
                                    {type}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    className={classes.projectsContainer}
                >
                    <Grid
                        item
                        xs={6}
                        className={classes.evenGrid}
                    >
                        {displayProjects.filter((project, i) => {
                            return (i % 2 === 0);
                        }).map(project => (
                            <ProjectThumb
                                project={project}
                                key={project.index}
                            />
                        ))}
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        className={classes.oddGrid}
                    >
                        {displayProjects.filter((project, i) => {
                            return (i % 2 !== 0);
                        }).map(project => (
                            <ProjectThumb
                                project={project}
                                key={project.index}
                            />
                        ))}
                    </Grid>
                </Grid>
            </SubComponentWrapper>
        </ComponentWrapper>
    )
}