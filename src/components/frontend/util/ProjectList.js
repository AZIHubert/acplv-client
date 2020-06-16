import React, {
    Fragment
} from 'react'

import ProjectThumb from './ProjectThumb'

import {
    Grid
} from '@material-ui/core'

import {
    makeStyles
} from '@material-ui/core/styles'

import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(theme => ({
    container: {
        overflow: 'visible'
    },
    evenGrid: {
        [theme.breakpoints.down('xs')]: {
            paddingRight: theme.spacing(2.5),
        },
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(3),
        },
        paddingRight: theme.spacing(8),
    },
    oddGrid: {
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(2.5),
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
        },
        paddingTop: theme.spacing(8),
        paddingLeft: theme.spacing(8)
    }
}))

export default ({projects, theme}) => {
    const classes = useStyles(theme)
    const isVerticalMobile = useMediaQuery({ query: '(max-width: 600px)' })
    return (
        <Grid
            className={classes.container}
            container
        >
             {isVerticalMobile ? (
                <Grid
                    item
                    xs={12}
                >
                    {projects.map((project, i) => (
                        <ProjectThumb
                            project={project}
                            key={project.index}
                            isFirst={i===0}
                        />
                    ))}
                </Grid>
             ): (
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
                                isFirst={i===0}
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
                
             )}
        </Grid>
    )
}