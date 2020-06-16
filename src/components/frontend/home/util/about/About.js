import React from 'react';

import SubComponentWrapper from '../../../util/SubComponentWrapper';

import ParagraphAnimate from '../../../util/ParagraphAnimate';

import {
    Grid
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    text: {
        textIndent: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            textIndent: theme.spacing(2),
        }
    }
}));

const splitPar = text => text.split('\n');

export default ({theme, whoAreWeFirst, whoAreWeSecond}) => {
    const classes = useStyles(theme);
    return (
        <SubComponentWrapper
            paddingBottom
        >
            <Grid container>
                <Grid item xs={12} md={9}>
                    
                    {(!!whoAreWeFirst) && (
                        splitPar(whoAreWeFirst).map((text, i) => (
                            <ParagraphAnimate
                                variant="body2"
                                customClass={classes.text}
                                key={i}
                            >
                                {text}
                            </ParagraphAnimate>
                        ))
                    )}
                    {(!!whoAreWeSecond) &&(
                        splitPar(whoAreWeSecond).map((text, i) => (
                            <ParagraphAnimate
                                variant="body1"
                                customClass={classes.text}
                                key={i}
                            >
                                {text}
                            </ParagraphAnimate>
                        ))
                    )}
                </Grid>
            </Grid>

            
        </SubComponentWrapper>
    )
}