import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default () => {
    return (
        <SubComponentWrapper title="change color">
            <CustomTextField
                label="About Us"
                name="about"
                focused
                textArea
            />
        </SubComponentWrapper>
    );
}