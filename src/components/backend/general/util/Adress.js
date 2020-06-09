import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default () => {
    return (
        <SubComponentWrapper title="Adress" borderbottom>
            <CustomTextField
                paddingBottom
                label="Street"
                name="adressStreet"
                focused
            />
            <CustomTextField
                label="City"
                name="adressCity"
            />
        </SubComponentWrapper>
    );
};