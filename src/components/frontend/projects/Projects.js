import React, {useState, useEffect} from 'react';

import {
    useQuery
} from '@apollo/react-hooks';

import {
    FETCH_FRONT_PROJECTS_QUERY,
    FETCH_USED_TYPES
} from '../../../graphql/querys/index';

import SubComponentWrapper from '../util/SubComponentWrapper'
import ComponentWrapper from '../util/ComponentWrapper'
import ProjectList from '../util/ProjectList';
import Types from './util/Types';

import Loader from '../loader/Loader';

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
    const [filteredProjects, setFilteredProjects] = useState([]);
    const classes = useStyles(theme);
    const {loading: loadingProjects, data: dataProjects} = useQuery(FETCH_FRONT_PROJECTS_QUERY);
    const {loading: loadingTypes, data: dataTypes} = useQuery(FETCH_USED_TYPES);
    useEffect(() => {
        if(!loadingProjects) {
            const {getProjects} = dataProjects
            setFilteredProjects([
                ...getProjects.filter(project => project.display)
            ]);
        }
      }, [dataProjects, loadingProjects])
    const filterProjects = _id => {
        console.log(_id);
        if(_id === 'all'){
            setFilteredProjects([
                ...dataProjects.getProjects
            ]);
        } else {
            console.log(dataProjects.getProjects.filter(project => project._id !== _id))
            setFilteredProjects([
                ...dataProjects.getProjects
                    .filter(project => project.type)
                    .filter(project => project.type._id === _id)
            ]);
        }
    };
    return (
        (!loadingProjects &&
         !loadingTypes &&
          dataProjects.getProjects &&
          dataTypes.getUsedTypes) ? (
            <ComponentWrapper
                title="projets"
            >
                <SubComponentWrapper
                    paddingBottom
                >
                    <Box
                        className={classes.wrapper}
                    >
                        {(dataTypes.getUsedTypes.length > 1) && (
                            <Types
                                filterProjects={filterProjects}
                                usedTypes={dataTypes.getUsedTypes}
                            />
                        )}
                        <ProjectList
                            projects={filteredProjects}
                        />
                    </Box>
                </SubComponentWrapper>
            </ComponentWrapper>
        ) : (
            <Loader />
        )
    );
};