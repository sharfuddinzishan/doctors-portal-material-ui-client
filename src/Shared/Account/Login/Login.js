import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { Container, Grid, Button, Box, TextField } from '@mui/material';

const Login = () => {
    // Retrieved firebase methos, state from custom hook
    const { signInGoogle, signInEmailPass, error, setError } = useAuth();
    const [userInfo, setUserInfo] = useState({});
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    // Get Input Values
    const handleInput = e => {
        const copyUser = { ...userInfo };
        copyUser[e.target.name] = e.target.value;
        setUserInfo(copyUser);
    }

    // Google POP up login 
    const handleGoogleLogin = () => {
        signInGoogle(history, redirect_uri);
    }

    // Handle login form with given password and email 
    const handleLoginForm = (e) => {
        e.preventDefault();
        signInEmailPass(userInfo?.email, userInfo?.pass, history, redirect_uri);
    }
    return (
        <>
            <div className="container p-5">
                <h1 className="text-center text-light">Login Panel</h1>
                {error?.length ? <p className="h6 text-muted">{error}</p> : ''}
                <form onSubmit={handleLoginForm}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                    >
                        <TextField
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
                            label="Password"
                            name="pass"
                            onBlur={handleInput}
                            type="password"
                            size="small"
                            required
                        />
                    </Box>
                    <Button type="submit" variant="contained">Login</Button>
                    <Button sx={{ ml: 1 }} onClick={handleGoogleLogin} variant="contained">Google Login</Button>
                </form>
            </div>
        </>
    );
};

export default Login;