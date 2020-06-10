import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default ({adressCity, adressStreet, handleChange}) => {
    return (
        <SubComponentWrapper title="Adress" borderbottom>
            <CustomTextField
                paddingBottom
                label="Street"
                name="adressStreet"
                handleChange={handleChange}
                focused
            />
            <CustomTextField
                label="City"
                name="adressCity"
                handleChange={handleChange}
            />
        </SubComponentWrapper>
    );
};