import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({component: Component, roles, ...rest}) => {
 
    let user = useSelector(state => state.security.user);

    const isAuthorized = () => {
         
        if (user.id) {
            return true;
        }
        return false;
    }

    return (
        <Route {...rest} render={props => (
            isAuthorized() ?
                <Component {...props} />
            : <Redirect to="/unauthorized"/>
        )} />
    );
};

export default PrivateRoute;