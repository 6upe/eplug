import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardItem from './CardItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@mui/material/Divider';
import CategoryFAB from './CategoryFAB';


const useStyles = makeStyles(
    {
        products: {
            // display: 'flex',
            padding: 20
        }
    }
);

function Products({isLogged, setcartItemsProduct, setClicked}) {
    const classes = useStyles();


    return (
        <div className={classes.products}>
            <Divider variant="middle" />
            <Typography style={{ paddingTop: 20, fontWeight: 'bold', color: 'lightgray' }} variant='h4' color='text.secondary' align='center'>Our Products</Typography>
            

            {<CategoryFAB setClicked={setClicked} setcartItemsProduct={setcartItemsProduct} isLogged = {isLogged}></CategoryFAB>}
            
            <Divider variant="middle" />
        </div>
    )
}

export default Products