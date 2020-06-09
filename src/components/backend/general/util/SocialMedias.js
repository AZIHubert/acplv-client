import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default () => {
    return (
        <SubComponentWrapper title="social medias">
            <CustomTextField
                paddingBottom
                name="facebookLink"
                label="Facebook"
            />
            <CustomTextField
                paddingBottom
                name="instagramLink"
                label="instagram"
            />
            <CustomTextField
                paddingBottom
                name="linkedinLink"
                label="LinkedIn"
            />
        </SubComponentWrapper>
    )
}