import React from 'react';

import SubComponentWrapper from '../../../util/SubComponentWrapper';
import ProjectList from '../../../util/ProjectList';


export default ({projects}) => {
    return (
        !!projects.length && (
            <SubComponentWrapper
                paddingTop
                paddingBottom
                title="projets"
                subTitle="récents"
            >
                <ProjectList
                    projects={projects}
                />
            </SubComponentWrapper>
        )
    )
}