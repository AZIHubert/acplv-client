import React from 'react';

import {
    useQuery
} from '@apollo/react-hooks';

import {
    FETCH_FRONT_PROJECTS_QUERY
} from '../../../graphql/querys/index';

import SubComponentWrapper from '../util/SubComponentWrapper'
import ComponentWrapper from '../util/ComponentWrapper'
import ProjectList from '../util/ProjectList';
import Types from './util/Types';

import {
    Box
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    wrapper: {
        paddingTop: theme.spacing(2)
    }
}));

export default ({theme}) => {
    const classes = useStyles(theme);
    const {loading, data} = useQuery(FETCH_FRONT_PROJECTS_QUERY);
    const filterProjects = () => {
        console.log('filtered');
    };
    return (
        (!loading && data.getProjects) && (
            <ComponentWrapper
                title="projets"
            >
                <SubComponentWrapper
                    paddingBottom
                >
                    <Box
                        className={classes.wrapper}
                    >
                        <Types
                            filterProjects={filterProjects}
                        />
                        <ProjectList
                            projects={data.getProjects}
                        />
                    </Box>
                </SubComponentWrapper>
            </ComponentWrapper>
        )
    );
};