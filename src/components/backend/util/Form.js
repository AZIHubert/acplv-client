import React from 'react';

import CustomButton from './CustomButton';

export default ({children, handleSubmit}) => {
    
    return (
        <form onSubmit={handleSubmit}>
            {children}
            <CustomButton onClick={handleSubmit}>
                save
            </CustomButton>
        </form>
    )
}