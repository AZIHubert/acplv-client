import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default () => {
    return (
        <SubComponentWrapper title="change color" borderbottom>
            <CustomTextField
                paddingBottom
                label="Primary Color"
                name="primaryColor"
                focused
            />
            <CustomTextField
                paddingBottom
                label="Secondary Color"
                name="secondary"
            />
            <CustomTextField
                label="Tertiary Color"
                name="tertiary"
            />
        </SubComponentWrapper>
    )
}