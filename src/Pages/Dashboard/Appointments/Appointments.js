import { React, useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 10,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Appointments = ({ appointDate }) => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/appointments?email=${user?.email}&&appointDate=${appointDate}`)
            .then(result => {
                setAppointments(result.data)
            })
    }, [appointDate])
    return (
        <>
            <TableContainer component={Paper} >
                <Table size="small" aria-label="customized table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Treatement</StyledTableCell>
                            <StyledTableCell align="left">Patient Name</StyledTableCell>
                            {/* <StyledTableCell align="right">Appoinment Date</StyledTableCell> */}
                            {/* <StyledTableCell align="right">Visit Time</StyledTableCell> */}
                            <StyledTableCell align="left">Contact Number</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <StyledTableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell component="th" scope="row">
                                    {row.serviceName}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.patientName}</StyledTableCell>
                                {/* <StyledTableCell align="left">{row.appointmentDate}</StyledTableCell> */}
                                {/* <StyledTableCell align="left">{row.visitTime}</StyledTableCell> */}
                                <StyledTableCell align="left">{row.contactNumber}</StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Appointments;