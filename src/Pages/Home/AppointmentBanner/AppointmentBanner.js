import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';

const AppointmentBanner = () => {
    const bgAppointment = {
        background: " url('https://i.ibb.co/GkDkYrn/appointment-bg.png')",
        backgroundColor: 'rgba(126, 140, 160,0.3)',
        backgroundBlendMode: 'darken, luminosity',
        backgroundAttachment: 'fixed',
    }
    return (
        <Box sx={{ flexGrow: 1, }} style={{ ...bgAppointment, marginTop: '100px' }} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <img
                        style={{ width: 410, marginTop: '-110px', marginBottom: '-7px' }}
                        src="https://i.ibb.co/StGVKrV/doctor.png" alt="" />
                </Grid>
                <Grid item xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ color: '#17879B', fontWeight: 'bold', textAlign: 'start', px: 2, mt: 2 }} variant="h5" >
                            Appointment
                        </Typography>
                        <Typography sx={{ color: 'white', fontWeight: 'bold', textAlign: 'start', px: 2, mt: 2 }} variant="h3" >
                            Make An Appointment Today
                        </Typography>
                        <Typography sx={{ color: 'white', fontWeight: '300', textAlign: 'start', px: 2, mt: 2 }} variant="h6" >
                            Lorem Itsum Lorem Itsum Lorem Itsum Lorem Itsum Lorem Itsum
                            Lorem Itsum Lorem Itsum Lorem Itsum Lorem Itsum Lorem Itsum
                            Lorem Itsum Lorem Itsum Lorem Itsum Lorem Itsum Lorem Itsum
                        </Typography>
                        <Button sx={{ px: 2, my: 2 }} variant="contained">Read More</Button>
                    </Box>

                </Grid>
            </Grid>
        </Box >
    );
};

export default AppointmentBanner;