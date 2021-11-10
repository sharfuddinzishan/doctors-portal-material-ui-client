import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';

const Service = (props) => {
    const { name, description, img } = props.service || {}
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    image={img}
                    alt="Paella dish"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                />
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        {name}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Service;