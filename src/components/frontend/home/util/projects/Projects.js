import React, {useState, Fragment} from 'react'

import SubComponentWrapper from '../../../util/SubComponentWrapper'
import ProjectThumb from './util/ProjectThumb'

import useWindowSize from '../../../../../hooks/useWindowSize'

import Grid from '@material-ui/core/Grid'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    evenGrid: {
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(2.5),
        },
        paddingRight: theme.spacing(3),
    },
    oddGrid: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2.5),
        },
        paddingTop: theme.spacing(8),
        paddingLeft: theme.spacing(8)
    }
}))

export default ({theme}) => {
    const {width} = useWindowSize()
    const classes = useStyles(theme)
    const [types] = useState([
        'KAKÉMONOS', 'STICKERS', 'PLAQUES PLEXIGLASS', 'BORNES TACTILES D’EXTÉRIEUR',
        'RELOOKING VITRINES'
    ])
    const [projects] = useState([{
        title: 'project 1',
        index: 0,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+1',
        type: [types[(Math.random() * types.length) | 0]]
    }, {
        title: 'project 2',
        index: 1,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+2',
        type: [types[(Math.random() * types.length) | 0]]
    }, {
        title: 'project 3',
        index: 2,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+3',
        type: [types[(Math.random() * types.length) | 0]]
    }, {
        title: 'project 4',
        index: 3,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+4',
        type: [types[(Math.random() * types.length) | 0]]
    }, {
        title: 'project 5',
        index: 4,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+5',
        type: [types[(Math.random() * types.length) | 0]]
    }, {
        title: 'project 6',
        index: 5,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+6',
        type: [types[(Math.random() * types.length) | 0]]
    }])
    return (
        
        <SubComponentWrapper
            paddingTop
            paddingBottom
            title="projets"
            subTitle="récents"
        >
            <Grid
                container
            >
                {width >= 600 ? 
                    <Fragment>
                        <Grid
                            item
                            xs={6}
                            className={classes.evenGrid}
                        >
                            {projects.filter((_, i) => {
                                return (i % 2 === 0);
                            }).map((project, i) => (
                                <ProjectThumb
                                    project={project}
                                    key={project.index}
                                    isLast={Math.floor(projects.length/2) === i+1}
                                />
                            ))}
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            className={classes.oddGrid}
                        >
                            {projects.filter((_, i) => {
                                return (i % 2 !== 0);
                            }).map((project, i) => (
                                <ProjectThumb
                                    project={project}
                                    key={project.index}
                                    isLast={Math.floor(projects.length/2) === i+1}
                                />
                            ))}
                        </Grid>
                    </Fragment>
                :
                    <Grid
                        item
                        xs={12}
                    >
                        {projects.map((project, i) => (
                            <ProjectThumb
                                project={project}
                                key={project.index}
                                isLast={projects.length === i+1}
                            />
                        ))}
                    </Grid>
                }
            </Grid>
        </SubComponentWrapper>
    )
}