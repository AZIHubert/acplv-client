import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default () => {
    return (
        <SubComponentWrapper title="phone" borderbottom>
            <CustomTextField
                name="phone"
            />
        </SubComponentWrapper>
    )
}