import React, {Fragment} from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles'

import Title from '../../util/Title';

const useStyles = makeStyles(theme => ({
    title: {
        paddingBottom: props => props.isLast ? '' : theme.spacing(0.5),
        marginBottom: props => props.isLast ? '' : theme.spacing(0.5)
    }
}))

export default (props) => {
    const {title, isLast} = props
    const classes = useStyles(props)
    return (
        <Fragment>
            <Title
                variant="h3"
                title={title}
                customClass={classes.title}
                lineBottom={!isLast}
            />
        </Fragment>
    )
}