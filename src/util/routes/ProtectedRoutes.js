import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

export default ({component: Component, ...rest}) => {
    const context = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={ props => 
                !!context.user ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    )
}