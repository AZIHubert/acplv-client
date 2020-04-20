import React from 'react'

import {
    Grid,
    Typography,
    Box
} from '@material-ui/core'

import {
    makeStyles
} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        borderBottom: `1px solid ${theme.palette.secondaryColor}`,
        paddingBottom: theme.spacing(1),
        marginBottom: props => props.isLast ? '0' : theme.spacing(8)
    },
    squareBox: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: 'red',
        marginBottom: theme.spacing(1),
        '&:before': {
            content: '""',
            display: 'block',
            paddingTop: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            '&:before': {
                paddingTop: '80%'
            }
        },
    },
    squareContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'red'
    },
    thumbnailContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.tertiaryColor,
        backgroundImage: props => `url('${props.project.thumbnail}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    projectTypeContainer: {
        [theme.breakpoints.up('lg')]: {
            textAlign: 'right'
        },
    }
}))

export default (props) => {
    const {project} = props
    const classes = useStyles(props)
    return (
        <div
            className={classes.container}
        >
            <div
                className={classes.squareBox}
            >
                <div
                    className={classes.squareContent}
                >
                    <div
                        className={classes.thumbnailContainer}
                    ></div>
                </div>
            </div>
            <Grid
                container
            >
                <Grid
                    item
                    xs={12} lg={6}
                >
                    <Box>
                        <Typography
                            variant="body2"
                            className={classes.projectTitle}
                        >
                            {project.title}
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12} lg={6}
                >
                    <Box
                        className={classes.projectTypeContainer}
                    >
                        <Typography
                            variant="body1"
                        >
                            {project.type}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}