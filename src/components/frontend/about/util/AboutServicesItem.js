import React, {Fragment} from 'react';

// import makeStyles from '@material-ui/core/styles/makeStyles'

import Title from '../../util/Title';

export default (props) => {
    const {title, isLast} = props;
    return (
        <Fragment>
            <Title
                variant="h3"
                title={title}
                lineBottom={!isLast}
            />
        </Fragment>
    )
}