import { Container, Grid, Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import Navigation from '../../Navigation/Navigation';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Reset from '../Reset/Reset';



function Account() {
    // By Default Tooggle means Registration form appear when user click on Account menu 
    const [toggle, setToggle] = useState(false);
    // To Get Reset Form of email 
    const [reset, setReset] = useState(false);

    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid container columns={{ xs: 4, md: 12 }}>
                    <Grid item xs={4} md={6}>
                        <Grid item xs={4}>
                            {
                                reset ? <Reset></Reset> :
                                    toggle ?
                                        <Register></Register>
                                        :
                                        <Login></Login>
                            }
                        </Grid>
                        <Grid item xs={4}>
                            {
                                reset ? '' :
                                    toggle ?
                                        <>
                                            <FormControlLabel
                                                label="Have Account Already?"
                                                labelPlacement="end"
                                                control={<Checkbox />}
                                                onChange={() => setToggle(!toggle)}
                                            />
                                        </>
                                        :
                                        <>
                                            <FormControlLabel
                                                label="Want To Create New Account?"
                                                labelPlacement="end"
                                                control={<Checkbox />}
                                                onChange={() => setToggle(!toggle)}
                                            />
                                        </>
                            }
                            <>
                                <FormControlLabel
                                    label="Reset?"
                                    labelPlacement="end"
                                    control={<Checkbox />}
                                    onChange={() => setReset(!reset)}
                                />
                            </>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <img width="100%" src="https://i.ibb.co/8Xmh7cd/image.png" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Account;
