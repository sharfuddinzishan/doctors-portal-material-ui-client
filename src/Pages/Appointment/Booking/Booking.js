import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import ModalBooking from '../ModalBooking/ModalBooking';

const Booking = (props) => {
    const { id, name, time, space } = props.booking || {}
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true); props?.setBookingStatus(false) };
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 3 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {time}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Total Space: {space}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleOpen} size="small">More</Button>
                    </CardActions>
                </Paper>
            </Grid>
            <ModalBooking
                open={open}
                handleClose={handleClose}
                booking={props?.booking}
                appointDate={props?.appointDate}
                setBookingStatus={props?.setBookingStatus} >
            </ModalBooking>
        </>
    );
};

export default Booking;