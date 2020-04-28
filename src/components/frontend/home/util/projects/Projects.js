import React, {
    useState
} from 'react'

import SubComponentWrapper from '../../../util/SubComponentWrapper'
import ProjectList from '../../../util/ProjectList'


export default () => {
    const [types] = useState([
        'KAKÉMONOS', 'STICKERS', 'PLAQUES PLEXIGLASS', 'BORNES TACTILES D’EXTÉRIEUR',
        'RELOOKING VITRINES'
    ])
    const [projects] = useState([{
        title: 'project 1',
        index: 0,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+1',
        type: [types[(Math.random() * types.length) | 0]]
    }, {
        title: 'project 2',
        index: 1,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+2',
        type: [types[(Math.random() * types.length) | 0]]
    }, {
        title: 'project 3',
        index: 2,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+3',
        type: [types[(Math.random() * types.length) | 0]]
    }, {
        title: 'project 4',
        index: 3,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+4',
        type: [types[(Math.random() * types.length) | 0]]
    }, {
        title: 'project 5',
        index: 4,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+5',
        type: [types[(Math.random() * types.length) | 0]]
    }, {
        title: 'project 6',
        index: 5,
        thumbnail: 'https://dummyimage.com/400x450/757575/000000&text=project+6',
        type: [types[(Math.random() * types.length) | 0]]
    }])
    return (
        
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
}