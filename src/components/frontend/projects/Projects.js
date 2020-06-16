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
    const classes = useStyles(theme);

    const [filteredProjects, setFilteredProjects] = useState([]);
    const [projects, setProjects] = useState([]);
    const [usedTypes, setUsedTypes] = useState([]);

    const {loading: loadingProjects, data: dataProjects, error: errorProjects} = useQuery(FETCH_FRONT_PROJECTS_QUERY);
    const {loading: loadingTypes, data: dataTypes, error: errorTypes} = useQuery(FETCH_USED_TYPES);

    useEffect(() => {
        const onCompleted = data => {
            setProjects(data.getProjects.filter(project => project.display));
            setFilteredProjects([...data.getProjects.filter(project => project.display)]);
        }
        if (onCompleted && !loadingProjects && !errorProjects) onCompleted(dataProjects);
    }, [loadingProjects, dataProjects, errorProjects]);

    useEffect(() => {
        const onCompleted = data => setUsedTypes(data.getUsedTypes);
        if (onCompleted && !loadingTypes && !errorTypes) onCompleted(dataTypes);
    }, [loadingTypes, dataTypes, errorTypes ]);
    
    const filterProjects = _id => {
        if(_id === 'all'){
            setFilteredProjects([
                ...dataProjects.getProjects
            ]);
        } else {
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