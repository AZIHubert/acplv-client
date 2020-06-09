import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default () => {
    return (
        <SubComponentWrapper title="email" borderbottom>
            <CustomTextField 
                name="email"
            />
        </SubComponentWrapper>
    )
}