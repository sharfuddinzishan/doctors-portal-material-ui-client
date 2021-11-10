import React, { useState } from 'react';
import { TextField, Button, Container, Alert } from '@mui/material'
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const handleInput = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        setSuccess(false)
        setError(false)
        e.preventDefault()
        const token = localStorage.getItem('tokenID')
        let headers = {
            "authorization": 'Bearer ' + token
        };
        const user = { email }
        axios.put('http://localhost:4000/user/admin', user, { headers })
            .then(result => {
                console.log(result)
                if (result?.data?.modifiedCount) {
                    setSuccess(true)
                }
                else {
                    setError(true)
                }
            })
            .catch(e => setError(true))
    }
    return (
        <>
            <Container>
                <h2>Make Admin</h2>
                {
                    success && <Alert severity="success">Action Done</Alert>
                }
                {
                    error && <Alert severity="error">Sorry! Unauthorized or Server Error</Alert>
                }
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="email"
                        variant="standard"
                        label="Email"
                        onBlur={handleInput}
                        sx={{ width: '60%' }}
                    />
                    <br /><br />
                    <Button type="submit" variant="contained">Make Admin</Button>
                </form>
            </Container>
        </>
    );
};

export default MakeAdmin;