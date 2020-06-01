import React from 'react'

import {
    Grid
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

import SubComponentWrapper from '../../util/SubComponentWrapper';

import ParagraphAnimate from '../../util/ParagraphAnimate';


const useStyles = makeStyles(theme => ({
    text: {
        textIndent: theme.spacing(5)
    },
    p: {
        position: 'relative'
    }
}))

export default ({about, theme}) => {
    const classes = useStyles(theme)
    return (
        <SubComponentWrapper
            paddingTop
            paddingBottom
        >
            <Grid
                container
            >
                <Grid item xs={12} md={9}>
                    <ParagraphAnimate
                        variant="body1"
                        customClass={classes.text}
                    >
                        {about}
                    </ParagraphAnimate>
                </Grid>
            </Grid>
        </SubComponentWrapper>
    )
}