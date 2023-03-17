import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />


                <Box
                    sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5" style={{ fontWeight: 'bold' }}>
                        Add Product
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="productName"
                            label="Product Name"
                            name="productName"
                            type="text"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="productPrice"
                            label="Product Price"
                            name="productPrice"
                            placeholder='00.00'
                            type="number"
                        />

                        <Select
                            style={{ marginTop: 10 }}
                            required
                            fullWidth
                            label="Category"
                        >
                            <MenuItem value='shoes'>Shoes</MenuItem>
                            <MenuItem value='clothes'>Clothes</MenuItem>
                            <MenuItem value='others'>Others</MenuItem>
                        </Select>

                        <TextField
                            style={{ marginTop: 10 }}
                            id="outlined-multiline-flexible"
                            label="Product Description"
                            multiline
                            fullWidth
                            maxRows={4}
                        />


                        <TextField
                            style={{ marginTop: 10, border: 'solid white' }} px
                            label={<AddPhotoAlternateIcon />}
                            type="image"
                            fullWidth
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{ fontWeight: 'bold', fontSize: '17px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10 }}
                        >

                            Add Product <AddCircleIcon style={{ marginLeft: 7 }} />
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}