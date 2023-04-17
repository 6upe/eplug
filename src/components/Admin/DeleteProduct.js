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
import Products from '../Home/Sections/Products';
import CardItem from '../Home/Sections/CardItem';

import {useHistory} from 'react-router-dom';




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



export default function DeleteProduct({ isLogged, isAdmin }) {




    // GETTING PRODUCTS
    const [products, setProducts] = React.useState('');



    React.useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setProducts(data);
            });
    }, []);

    const history = useHistory();

    function deleteFromDB(productObject) {
        fetch('http://localhost:8000/products/' + productObject.id, {
          method: 'DELETE',
        })
        .then(() => {
          console.log(productObject.ProductName + ' deleted');
          window.location.reload(); // reload the current page
        })
        .catch(error => {
          console.error('Error deleting product:', error);
        });
      }
      


    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <CssBaseline />


                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    
                    <Grid xs={12} sm={6} md={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflowX: 'scroll' }}>
                        {products &&

                            products.reverse()
                                .map(product => (

                                    <CardItem
                                        key={product.id}
                                        id={product.id}
                                        productName={product.ProductName}
                                        price={product.price}
                                        imgName={"../" + product.imgName}
                                        desc={product.desc}
                                        isLogged={isLogged}
                                        isAdmin={isAdmin}
                                        // handleClick={() => handleClick(product.id)}
                                        handleClick={() => deleteFromDB(product)}

                                    >
                                    </CardItem>

                    

                                ))

                    }
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}