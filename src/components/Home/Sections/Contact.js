import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import ContactForm from './ContactForm';
import Paper from '@mui/material/Paper';
import CallIcon from '@mui/icons-material/Call';

const useStyles = makeStyles({
    contact: {
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        margin: 50
    }
});

export default function MiddleDividers() {
    const classes = useStyles();
    return (


        <div className={classes.contact}>
            <Paper square elevation={1}>
                <Box sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper' }}>
                    <Box sx={{ my: 3, mx: 2 }}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography gutterBottom variant="h4" component="div">
                                    For Queries
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography color='text.secondary' gutterBottom variant="h6" component="div">
                                    feel free to contact us!
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography color="text.secondary" variant="body2">
                            For queries on delivery plans, coupons and other discussions we can have to improve our services
                            <br /> or give us a call!
                            <br />
                            <br /> <CallIcon/> +260 777 430 797 | Theodora Shinga | Marketing
                            <br />
                            <br /> <CallIcon/> +260 962 893 773 | Katongo Bupe | Sales
                        </Typography>
                    </Box>
                    <Divider variant="middle" />
                    <div style={{ padding: '2%' }}>
                        <ContactForm></ContactForm>
                    </div>

                    <Divider variant="middle" />

                </Box>
            </Paper>
        </div>
    );
}
