import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import InventoryIcon from '@mui/icons-material/Inventory';
import Button from '@mui/material/Button';
import Grid from '@material-ui/core/Grid';
import CardItem from './CardItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};


export default function FloatingActionButtonZoom({ isLogged, setClicked, setcartItemsProduct }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [productImagePath, setProductImagePath] = React.useState('')

  // GETTING PRODUCTS
  const [products, setProducts] = useState('');


  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const [openSnackbar, setOpenSnackbar] = useState(null);
  const [productOnSnack, setProductOnSnack] = useState('');

  function addToCartProducts(product) {
    setClicked(true);
    setOpenSnackbar(true);
    console.log(product.productName + " was clicked");
    handleSnackClick(product.productName);
    let newProductSum = (1 * product.price);

    let newCartObject = {
      productId: product.id,
      productDesc: product.productName,
      productQty: 1,
      productPrice: product.price,
      productSum: newProductSum
    };

    setcartItemsProduct(newCartObject);
      
  }
  // END OF GETTING PRODUCTS


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'success',
      sx: fabStyle,
      icon: <InventoryIcon />,
      label: 'Add',
    },
    {
      color: 'success',
      sx: fabStyle,
      icon: <InventoryIcon />,
      label: 'Edit',
    },
    {
      color: 'success',
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <InventoryIcon />,
      label: 'Expand',
    },
  ];

  // SNACK BAR FUNCTIONS START

  const [open, setOpen] = React.useState(false);

  const handleSnackClick = (productName) => {
    setOpen(true);
    console.log(productName + " snack bar open");
    setProductOnSnack(productName);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  // SNACK BAR FUNCTIONS END



  return (
    <Box
      sx={{
        bgcolor: 'white',
        width: '100%',
        position: 'relative',
        minHeight: 200,
      }}
    >
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', margin: '2%' }}>
        <div style={{ width: '90%' }}>
          <AppBar position="static" color="" width="90%">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              fontWeight="bold"
              variant="fullWidth"
              aria-label="action tabs example"

            >
              <Tab style={{ fontWeight: 'bold', color: 'lightgray' }} label="Shoes" {...a11yProps(0)} />
              <Tab style={{ fontWeight: 'bold', color: 'lightgray' }} label="Clothes" {...a11yProps(1)} />
              <Tab style={{ fontWeight: 'bold', color: 'lightgray' }} label="Other" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
        </div>
      </div>



      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container>
            {products &&

              products.filter(product => product.category === 'shoes')
                .slice(-4)
                .reverse()
                .map(product => (
                  <Grid xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CardItem
                      key={product.id}
                      id={product.id}
                      productName={product.ProductName}
                      price={product.price}
                      imgName={product.imgName}
                      desc={product.desc}
                      isLogged={isLogged}
                      // handleClick={() => handleClick(product.id)}
                      handleClick={addToCartProducts}
                    >
                    </CardItem>

                    {/* <CartSnackbar productName={product.ProductName} openSnackbar={openSnackbar}></CartSnackbar> */}
                  </Grid>
                ))

            }
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>


          <Grid container>
            {products &&

              products.filter(product => product.category === 'clothes')
                .slice(-4)
                .reverse()
                .map(product => (
                  <>
                    <Grid xs={12} sm={6} md={3} key={product.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <CardItem handleClick={addToCartProducts} productName={product.ProductName} price={product.price} imgName={product.imgName} desc={product.desc}>
                      </CardItem>
                    </Grid>

                  </>
                ))

            }
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Grid container>
            {products &&

              products.filter(product => product.category === 'others')
                .slice(-4)
                .reverse()
                .map(product => (
                  <Grid xs={12} sm={6} md={3} key={product.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CardItem handleClick={addToCartProducts} productName={product.ProductName} price={product.price} imgName={product.imgName} desc={product.desc}>
                    </CardItem>

                  </Grid>
                ))

            }
          </Grid>
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}

      {/* // SNACKBAR START */}

      {/* <Button onClick={() => handleSnackClick(product.productName)}>Open simple snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={productOnSnack + ' added to Cart'}
        action={action}
      />

      {/* // SNACKBAR END */}
    </Box>
  );
}
