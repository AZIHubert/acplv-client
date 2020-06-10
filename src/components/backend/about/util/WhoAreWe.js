import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default ({handleChange, WhoAreWeFirst, WhoAreWeSecond}) => {
    return (
        <SubComponentWrapper title="change color" borderbottom>
            <CustomTextField
                paddingBottom
                label="First Paragraph"
                name="WhoAreWeFirst"
                value={WhoAreWeFirst}
                handleChange={handleChange}
                autoFocus
                textArea
            />
            <CustomTextField
                label="Second Paragraph"
                name="WhoAreWeSecond"
                value={WhoAreWeSecond}
                handleChange={handleChange}
                textArea
            />
        </SubComponentWrapper>
    );
}