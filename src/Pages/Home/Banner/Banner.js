import { Grid, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React from 'react';

const Banner = () => {
    const bgBanner = {
        background: " url('https://i.ibb.co/8KdV3Dz/bg.png')",
        backgroundColor: 'rgba(17, 27, 17,0.4)',
        backgroundBlendMode: 'darken,luminosity',
        backgroundAttachment: 'fixed',
    }
    const allFlexCenter = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <Container style={bgBanner} sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={12} md={6} sx={allFlexCenter}>
                    <Box>
                        <Typography sx={{ color: 'white', fontWeight: 'bold', textAlign: 'start', pr: 2, mt: 2 }} variant="h3" >
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography sx={{ color: 'white', fontWeight: '300', textAlign: 'start', pr: 2, mt: 2 }} variant="h6" >
                            Lorem Itsum Lorem Itsum Lorem Itsum Lorem Itsum Lorem Itsum
                        </Typography>
                        <Button sx={{ px: 2, my: 2 }} variant="contained">Read More</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ ...allFlexCenter, py: 2 }}>
                    <img width="350" src="https://i.ibb.co/58bnqqG/chair.png" alt="" />
                </Grid>
            </Grid >
        </Container >
    );
};

export default Banner;