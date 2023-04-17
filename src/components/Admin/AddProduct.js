import * as React from 'react';
import { useState } from 'react';
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
    const [ProductName, setProductName] = useState('');
    const [price, setprice] = useState('');
    const [category, setcategory] = useState('');
    const [desc, setdesc] = useState('');
    const [imgName, setImgName] = useState('');

    const addProduct = (event) => {
        event.preventDefault();
        const product = { ProductName, price, imgName, desc, category };


        fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        }).then(() => {
            console.log('New product added!');
            handleFileUpload();
        });

    };


    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
        const file = event.target.files[0].name;
        setImgName(file);
        console.log(file);

    };

    const handleFileUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('image', selectedFile);

            const response = await fetch('http://localhost:7000/upload', {
                method: 'POST',
                body: formData,
            });
            
            console.log(response);
        } catch (error) {
            console.error(error);
        }
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

                    <Box component="form" onSubmit={addProduct} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="ProductName"
                            label="Product Name"
                            name="ProductName"
                            type="text"
                            onChange={(e) => setProductName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="price"
                            label="Product Price"
                            name="price"
                            placeholder='00.00'
                            type="number"
                            onChange={(e) => setprice(e.target.value)}
                        />

                        <Select
                            style={{ marginTop: 10 }}
                            required
                            fullWidth
                            label="Category"
                            onChange={(e) => setcategory(e.target.value)}
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
                            onChange={(e) => setdesc(e.target.value)}
                        />


                        <TextField
                            style={{ marginTop: 10, border: 'solid white' }}
                            type="file"
                            accept="image/*"
                            fullWidth
                            onChange={handleFileSelect}
                            InputProps={{
                                startAdornment: <AddPhotoAlternateIcon />,
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{ fontWeight: 'bold', fontSize: '17px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10 }}
                        >
                            Add Product
                            <AddCircleIcon style={{ marginLeft: 7 }} />
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}