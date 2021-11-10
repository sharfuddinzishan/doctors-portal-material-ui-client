import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [appointDate, setAppointDate] = React.useState(new Date());
    const { loading } = useAuth();
    if (loading) return 'loading';
    return (
        <>
            <Navigation></Navigation>
            <AppointmentHeader appointDate={appointDate} setAppointDate={setAppointDate}></AppointmentHeader>
            <AvailableAppointments appointDate={appointDate}></AvailableAppointments>
        </>
    );
};

export default Appointment;