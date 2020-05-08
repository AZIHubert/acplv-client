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
        paddingBottom: theme.spacing(5)
    },
    title: {
        [theme.breakpoints.up('1350')]: {
            fontSize: '5rem',
        }
    },
    subTitle: {
        [theme.breakpoints.up('1350')]: {
            fontSize: '5rem',
        },
        paddingLeft: theme.spacing(15),
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
                        className={classes.subTitle}
                        variant='h1'
                    />
                </div>}

                {children}
            </div>
        </div>
    )
}