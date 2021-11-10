import React, { useState } from 'react';
import { Container, Grid, Button, Box, TextField } from '@mui/material';
import initialization from '../../../firebase/firebaseInitialize';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

initialization();
const Register = () => {
    // Get Firebase settings  from custom hook
    const { createUser, setUserFullName, error, setError, sendVerification
    } = useAuth();
    const [userInfo, setUserInfo] = useState({});
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    // Get Input Values from registration field 
    const handleInput = e => {
        const copyUser = { ...userInfo };
        copyUser[e.target.name] = e.target.value;
        setUserInfo(copyUser);
    }

    const handleRegistrationForm = (e) => {
        e.preventDefault();
        if (userInfo.pass === userInfo.pass2) {
            createUser(userInfo.email, userInfo.pass, userInfo.userName, history, redirect_uri);
        }
        else {
            alert('Password Not Matched');
            return
        }
    }

    return (
        <>
            <div className="container p-5">
                <h1 className="text-center text-light">Register Here</h1>
                {error?.length ? <p className="h6 text-muted">{error}</p> : ''}
                <form onSubmit={handleRegistrationForm}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                    >
                        <TextField
                            helperText="Please enter your name"
                            id=""
                            label="Name"
                            name="userName"
                            onBlur={handleInput}
                            type="text"
                            size="small"
                            required
                            inputProps={{
                                form: {
                                    autocomplete: 'off',
                                },
                            }}
                        />
                        <TextField
                            helperText="We'll never share your email with anyone else."
                            id=""
                            label="Email"
                            name="email"
                            onBlur={handleInput}
                            type="email"
                            size="small"
                            required
                            inputProps={{
                                form: {
                                    autocomplete: 'off',
                                },
                            }}
                        />
                        <TextField
                            helperText="Must be 6-20 characters long."
                            id=""
                            label="Password"
                            name="pass"
                            onBlur={handleInput}
                            type="password"
                            size="small"
                            required
                        />
                        <TextField
                            helperText="Password Must Be Same"
                            id=""
                            label="Confirm Password"
                            name="pass2"
                            onBlur={handleInput}
                            type="password"
                            size="small"
                            required
                        />
                    </Box>
                    <Button type="submit" variant="contained">Sign Up</Button>
                </form>
            </div>
        </>
    );
};

export default Register;