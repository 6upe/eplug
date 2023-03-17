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

import Grid from '@material-ui/core/Grid';
import CardItem from './CardItem';


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

export default function FloatingActionButtonZoom({products}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

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
            {

              products.filter(product => product.category === 'shoes').map(product => (
                <Grid xs={12} sm={6} md={3} key={product.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CardItem productName={product.ProductName} price={product.price} imgName={product.imgName} desc={product.desc}>
                  </CardItem>
                </Grid>
              ))

            }
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid container>
            {

              products.filter(product => product.category === 'clothes').map(product => (
                <Grid xs={12} sm={6} md={3} key={product.id}>
                  <CardItem productName={product.ProductName} price={product.price} imgName={product.imgName} desc={product.desc}>
                  </CardItem>
                </Grid>
              ))

            }
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Grid container>
            {

              products.filter(product => product.category === 'other').map(product => (
                <Grid xs={12} sm={6} md={3} key={product.id}>
                  <CardItem productName={product.ProductName} price={product.price} imgName={product.imgName} desc={product.desc}>
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
    </Box>
  );
}
