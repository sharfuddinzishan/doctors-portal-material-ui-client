import { React, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ModalBooking = ({ open, handleClose, booking, appointDate, setBookingStatus }) => {
    const { id, name: serviceName, time: visitTime, space } = booking || {}
    const { user } = useAuth();
    const bookingInfo = {
        patientName: user?.displayName,
        email: user?.email,
        serviceName
    }
    const [getBooking, setBooking] = useState(bookingInfo);

    const handleInputOnBlur = (e) => {
        const copyBooking = { ...getBooking };
        const field = e.target.name;
        const value = e.target.value;
        copyBooking[field] = value;
        setBooking(copyBooking);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const appointment = {
            ...getBooking,
            appointmentDate: appointDate.toLocaleDateString(),
            visitTime
        }
        let action = window.confirm('submit booking request?');
        if (action) {
            axios.post(`https://hero-doctors.herokuapp.com/appointments`, appointment)
                .then(() => {
                    alert('Appointment Done')
                    setBookingStatus(true);
                })
                .catch(error => {
                    alert('Appointment Failed')
                })
        }

        handleClose();
    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography variant="h6" component="h2">
                            {serviceName}
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <TextField
                                disabled
                                defaultValue={visitTime}
                                label="Visit Time"
                                variant="outlined"
                                sx={{ mt: 2, width: '90%' }}
                                size="small"
                            />
                            <TextField
                                disabled
                                defaultValue={appointDate.toLocaleDateString()}
                                label="Appointment Date"
                                variant="outlined"
                                sx={{ mt: 2, width: '90%' }}
                                size="small"
                            />
                            <TextField
                                name="patientName"
                                required
                                label="Patient Name"
                                defaultValue={user?.displayName || ''}
                                variant="outlined"
                                sx={{ mt: 2, width: '90%' }}
                                size="small"
                                helperText="Provide Patient Name"
                                onBlur={handleInputOnBlur}
                            />
                            <TextField
                                disabled
                                aria-readonly
                                label="Email"
                                type='email'
                                defaultValue={user?.email}
                                variant="outlined"
                                sx={{ mt: 2, width: '90%' }}
                                size="small"
                            />
                            <TextField
                                name="contactNumber"
                                required
                                label="Contact No."
                                type='phone'
                                variant="outlined"
                                sx={{ mt: 2, width: '90%' }}
                                size="small"
                                onBlur={handleInputOnBlur}
                            />
                            <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{ mt: 2 }}>
                                Send
                            </Button>
                        </form>

                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default ModalBooking;