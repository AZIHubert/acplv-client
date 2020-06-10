import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default ({email, handleChange}) => {
    return (
        <SubComponentWrapper title="email" borderbottom>
            <CustomTextField 
                name="email"
                value={email}
                handleChange={handleChange}
            />
        </SubComponentWrapper>
    )
}