import React from 'react'

import {Textfit} from 'react-textfit';

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    contactLink: {
        fontFamily: 'GillSansBold',
        textTransform: 'uppercase',
        textStrokeWidth: 1,
        lineHeight: 1,
        textStrokeColor: theme.palette.secondaryColor,
        color: 'transparent',
        transition: theme.transitions.create(['text-stroke-color', 'color'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
            color: theme.palette.tertiaryColor,
            textStrokeColor: theme.palette.tertiaryColor,
        },
        '&:hover::selection': {
            backgroundColor: theme.palette.tertiaryColor,
        },
        '&::selection': {
            backgroundColor: theme.palette.secondaryColor,
            color: theme.palette.primaryColor
        },
        [theme.breakpoints.down('xs')]: {
            textStrokeWidth: 'unset',
            color: theme.palette.secondaryColor,
            '&:hover': {
                color: theme.palette.tertiaryColor,
            },
            '&::selection': {
                color: theme.palette.primaryColor,
                backgroundColor: theme.palette.secondaryColor
            }
        },
    },
}))

export default ({email, theme}) => {
    const classes = useStyles(theme)
    return (
        <Textfit
            mode="single"
            max={10000}
        >
            <a
                href={`mailto:${email}`}
                className={classes.contactLink}
            >
                {email}
            </a>
        </Textfit>
    )
};