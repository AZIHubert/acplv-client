import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default () => {
    return (
        <SubComponentWrapper title="change color" borderbottom>
            <CustomTextField
                paddingBottom
                label="First Paragraph"
                name="WhoAreWeFirst"
                focused
                textArea
            />
            <CustomTextField
                label="Second Paragraph"
                name="WhoAreWeSecond"
                textArea
            />
        </SubComponentWrapper>
    );
}