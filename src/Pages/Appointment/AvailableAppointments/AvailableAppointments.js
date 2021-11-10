import { Typography, Container, Grid, Alert } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
]
const AvailableAppointments = ({ appointDate }) => {
    const [bookingStatus, setBookingStatus] = useState(false);
    return (
        <Container>
            <Typography variant='h3'>
                Available Appointment: {appointDate.toDateString()}
            </Typography>
            {bookingStatus && <Alert severity="success">Booking Success</Alert>}
            <Grid container spacing={3} sx={{ py: 3 }}>
                {
                    bookings.map(booking => {
                        return <Booking
                            key={booking.id}
                            booking={booking}
                            appointDate={appointDate}
                            setBookingStatus={setBookingStatus}>
                        </Booking>
                    })
                }
            </Grid>
        </Container >
    );
};

export default AvailableAppointments;