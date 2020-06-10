import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default ({primaryColor, secondaryColor, tertiaryColor, handleChange}) => {
    return (
        <SubComponentWrapper title="change color" borderbottom>
            <CustomTextField
                paddingBottom
                label="Primary Color"
                name="primaryColor"
                autoFocus
                value={primaryColor}
                handleChange={handleChange}
            />
            <CustomTextField
                paddingBottom
                label="Secondary Color"
                name="secondary"
                value={secondaryColor}
                handleChange={handleChange}
            />
            <CustomTextField
                label="Tertiary Color"
                name="tertiary"
                value={tertiaryColor}
                handleChange={handleChange}
            />
        </SubComponentWrapper>
    )
}