import React from 'react'

import Title from './Title';
import Line from './Line';

import {
    makeStyles
} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    innerContainer: {
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
    },
    titleContainer: {
        paddingBottom: theme.spacing(7),
        [theme.breakpoints.down('lg')]: {
            paddingBottom: theme.spacing(5),
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: theme.spacing(2),
        },
    },
    title: {
        [theme.breakpoints.up('1350')]: {
            fontSize: '7rem',
        },
        fontSize: '5.5rem',
        [theme.breakpoints.down('824')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.2rem',
        },
    },
    subTitle: {
        paddingLeft: theme.spacing(10),
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(2),
        }
    }
}))

export default (props) => {
    const {title, subTitle, hasBorder, children} = props
    const classes = useStyles(props)
    return (
        <div>
            {hasBorder && (
                <Line
                    index={0}
                />
            )}
            <div
                className={classes.innerContainer}
            >
                {title && <div
                    className={subTitle ? '' : classes.titleContainer}
                >
                    <Title
                        title={title}
                        className={classes.title}
                        variant='h1'
                    />
                </div>}
                {subTitle && <div
                    className={classes.titleContainer}
                >
                    <Title
                        title={subTitle}
                        className={`${classes.title} ${classes.subTitle}`}
                        variant='h1'
                    />
                </div>}

                {children}
            </div>
        </div>
    )
}