import React, {Fragment} from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import Title from '../../util/Title';

const useStyles = makeStyles(theme => ({
    title: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.2rem'
        }
    }
}));

export default (props) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const {title, isLast} = props;
    return (
        <Fragment>
            <Title
                variant="h3"
                title={title}
                className={classes.title}
                lineBottom={!isLast}
            />
        </Fragment>
    )
}