import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default () => {
    return (
        <SubComponentWrapper title="About Us">
            <CustomTextField
                name="about"
                focused
                textArea
            />
        </SubComponentWrapper>
    );
}