import React from 'react';

import CustomButton from './CustomButton';

export default ({children}) => {
    
    return (
        <form>
            {children}
            <CustomButton>
                save
            </CustomButton>
        </form>
    )
}