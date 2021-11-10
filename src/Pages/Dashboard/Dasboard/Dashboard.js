import { Grid } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';
import ResponsiveDrawer from '../Responsive drawer/Responsive drawer';

const Dashboard = () => {
    return (
        <>
            <ResponsiveDrawer></ResponsiveDrawer>
        </>
    );
};

export default Dashboard;