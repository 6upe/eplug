import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
    return (
        <>
        
        <Box sx={{ flexGrow: 1}} style={{display: 'flex', justifyContent: 'center'}}>
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                
                    <Grid item xs={11} sm={11} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <AddProduct></AddProduct>
                        </Card>
                    </Grid>

                    <Grid item xs={11} sm={11} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <DeleteProduct></DeleteProduct>
                        </Card>
                    </Grid>

                    <Grid item xs={11} sm={11} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <UpdateProduct></UpdateProduct>
                        </Card>
                    </Grid>
               
            </Grid>
        </Box>

        </>
        
    );
}