import React from 'react';
import { Redirect } from 'react-router';
import useAuth from './../Hooks/useAuth';
import { Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) return <CircularProgress />;
    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                    user.email ? (children) : (
                        <Redirect
                            to={{
                                pathname: "/account",
                                state: { from: location }
                            }}>
                        </Redirect>
                    )}
        />
    );
};

export default PrivateRoute;