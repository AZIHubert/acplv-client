import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default ({handleChange, about}) => {
    return (
        <SubComponentWrapper title="About Us">
            <CustomTextField
                name="about"
                focused
                textArea
                value={about}
                handleChange={handleChange}
            />
        </SubComponentWrapper>
    );
}