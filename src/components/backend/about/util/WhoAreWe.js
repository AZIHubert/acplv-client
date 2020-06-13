import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default ({handleChange, whoAreWeFirst, whoAreWeSecond}) => {
    return (
        <SubComponentWrapper title="change color" borderbottom>
            <CustomTextField
                paddingBottom
                label="First Paragraph"
                name="whoAreWeFirst"
                value={whoAreWeFirst}
                handleChange={handleChange}
                autoFocus
                textArea
            />
            <CustomTextField
                label="Second Paragraph"
                name="whoAreWeSecond"
                value={whoAreWeSecond}
                handleChange={handleChange}
                textArea
            />
        </SubComponentWrapper>
    );
}