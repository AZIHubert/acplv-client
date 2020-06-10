import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default ({phone, handleChange}) => {
    return (
        <SubComponentWrapper title="phone" borderbottom>
            <CustomTextField
                name="phone"
                value={phone}
                handleChange={handleChange}
            />
        </SubComponentWrapper>
    )
}