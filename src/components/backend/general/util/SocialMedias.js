import React from 'react';

import SubComponentWrapper from '../../util/SubComponentWrapper';
import CustomTextField from '../../util/CustomTextField';

export default ({facebookLink, instagramLink, linkedinLink, handleChange}) => {
    return (
        <SubComponentWrapper title="social medias">
            <CustomTextField
                paddingBottom
                name="facebookLink"
                label="Facebook"
                value={facebookLink}
                handleChange={handleChange}
            />
            <CustomTextField
                paddingBottom
                name="instagramLink"
                label="instagram"
                value={instagramLink}
                handleChange={handleChange}
            />
            <CustomTextField
                paddingBottom
                name="linkedinLink"
                label="LinkedIn"
                value={linkedinLink}
                handleChange={handleChange}
            />
        </SubComponentWrapper>
    )
}