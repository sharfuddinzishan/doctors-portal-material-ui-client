import { getAuth, sendPasswordResetEmail } from '@firebase/auth';
import React, { useState } from 'react';
import { Container, Grid, Button, Box, TextField } from '@mui/material';

const Reset = () => {
    const auth = getAuth();
    const [email, setEmail] = useState();
    const [error, setError] = useState("");

    const handleInput = e => {
        setEmail(e.target.value)
    }

    const handleResetForm = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(response => {
                setError('');
                alert('Reset Link Send To Email')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <>
            <h1 className="text-center text-light">Rest Panel</h1>
            {error.length ? <p className="h6 text-muted">{error}</p> : ''}
            <form onSubmit={handleResetForm}>
                <Box>
                    <TextField
                        label="Email"
                        name="email"
                        onBlur={handleInput}
                        type="email"
                        required
                        fullWidth
                        sx={{ mb: 1 }}
                    />
                </Box>
                <Button type="submit" variant="contained">Reset</Button>
            </form>
        </>
    );
};

export default Reset;