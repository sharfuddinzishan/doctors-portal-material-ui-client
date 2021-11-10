import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [appointDate, setAppointDate] = React.useState(new Date());
    return (
        <Grid container spacing="1">
            <Grid item xs="12" md="5">
                <Calender appointDate={appointDate} setAppointDate={setAppointDate}></Calender>
            </Grid>
            <Grid item xs="12" md="7">
                <Appointments appointDate={appointDate}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;