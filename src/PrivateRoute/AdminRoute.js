import React from 'react';
import { Redirect } from 'react-router';
import useAuth from '../Hooks/useAuth';
import { Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const AdminRoute = ({ children, ...rest }) => {
    const { isAdmin, loadingAdmin, user } = useAuth();
    if (loadingAdmin) return <>
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
    </>;
    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                    user.email && isAdmin ? (children) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}>
                        </Redirect>
                    )}
        />
    );
};

export default AdminRoute;