import React from 'react'

import Title from './Title';
import Line from './Line';

import ParallaxVerticale from './ParallaxVerticale';

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
    subTitle: {
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
                    {/* <ParallaxVerticale
                        ratio={0.1}
                        relativeToPercent={75}
                    > */}
                        <Title
                            title={title}
                            variant='h1'
                        />
                    {/* </ParallaxVerticale> */}
                </div>}
                {subTitle && <div
                    className={classes.titleContainer}
                >
                    {/* <ParallaxVerticale
                        ratio={0.1}
                        relativeToPercent={75}
                    > */}
                        <Title
                            title={subTitle}
                            className={classes.subTitle}
                            variant='h1'
                        />
                    {/* </ParallaxVerticale> */}
                </div>}

                {children}
            </div>
        </div>
    )
}