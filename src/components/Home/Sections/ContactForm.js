import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function BasicTextFields() {
    return (
        <div style={{ padding: 30 }}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1},
                }}
                noValidate
                autoComplete="off"
            >
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
                    <TextField style={{marginRight: 5}} fullWidth id="outlined-basic" label="Fullname" variant="outlined" />
                    <TextField style={{marginLeft: 5}} fullWidth id="filled-basic" label="Email Address" variant="outlined" />
                </div>
                
                <br />
                <TextField
                    fullWidth
                    id="outlined-multiline-flexible"
                    label="Your Message here..."
                    multiline
                    maxRows={8}
                />
                <br />
                <Button size="large" fullWidth variant='outlined' color='primary' endIcon={<SendIcon />}>Send Message</Button>
            </Box>
        </div>
    );
}
