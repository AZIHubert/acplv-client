import React from 'react'

import Title from './Title'

import {
    Typography
} from '@material-ui/core'

import {
    makeStyles
} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        padding: props => theme.spacing(
            props.paddingTop ? 10 : 0,
            0,
            props.paddingBottom ? 10 : 0
        ),
        [theme.breakpoints.down('xs')]: {
            padding: props => theme.spacing(
                props.paddingTop ? 5 : 0,
                0,
                props.paddingBottom ? 5 : 0
            ),
        },
        borderTop: props => props.hasBorder ? `1px solid ${theme.palette.secondaryColor}` : ''
    },
    titleContainer: {
        paddingBottom: theme.spacing(5)
    },
    subTitle: {
        paddingLeft: theme.spacing(15),
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(2),
        }
    }
}))

export default (props) => {
    const {title, subTitle, children} = props
    const classes = useStyles(props)
    return (
        <div
            className={classes.container}
        >
            {title && <div
                className={subTitle ? '' : classes.titleContainer}
            >
                <Title
                    title={title}
                />
            </div>}
            {subTitle && <div
                className={classes.titleContainer}
            >
                <Title
                    title={subTitle}
                    className={classes.subTitle}
                />
            </div>}

            {children}
        </div>
    )
}