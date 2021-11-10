import { Grid, Container } from '@mui/material';
import React from 'react';
import Calender from '../../../Shared/Calender/Calender';

const AppointmentHeader = ({ appointDate, setAppointDate }) => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Calender appointDate={appointDate} setAppointDate={setAppointDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img width='100%' src="https://i.ibb.co/58bnqqG/chair.png" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;