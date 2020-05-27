import React from 'react';

import {
    useQuery
} from '@apollo/react-hooks';

import {
    FETCH_FRONT_PROJECTS_QUERY
} from '../../../../../graphql/querys/index';

import SubComponentWrapper from '../../../util/SubComponentWrapper';
import ProjectList from '../../../util/ProjectList';


export default () => {
    const {loading, data} = useQuery(FETCH_FRONT_PROJECTS_QUERY);
    return (
        (!loading && data.getProjects) && (
            <SubComponentWrapper
                paddingTop
                paddingBottom
                title="projets"
                subTitle="récents"
            >
                <ProjectList
                    projects={data.getProjects}
                />
            </SubComponentWrapper>
        )
    )
}