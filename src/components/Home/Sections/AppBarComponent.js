import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import Cart from '@mui/icons-material/ShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
import AirIcon from '@mui/icons-material/Air';
import LoginIcon from '@mui/icons-material/Login';
import Link from '@mui/material/Link';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// import LoginIcon from '@mui/icons-material/Login';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// import Table from './Table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar({ numOfCartItems, isLogged, firstname, setcartItems, cartItems, cartTotal }) {

  // MODAL FUNCTIONS
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  // END OF MODAL FUNCTIONS

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      style={{
        width: '40%'
      }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >

      {!isLogged && <Link href="/auth/signin" underline="none" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
        <LoginIcon /><MenuItem onClick={handleMenuClose} style={{ fontWeight: 'bold', color: '#1976d2' }}>Log In</MenuItem>
      </Link>}
      {!isLogged && <Link href="/auth/signup" underline="none" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
        <PersonAddAltIcon /><MenuItem onClick={handleMenuClose} style={{ fontWeight: 'bold', color: '#1976d2' }}>Sign Up</MenuItem>
      </Link>}
      {isLogged && <Link href="/auth/signin" underline="none" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
        <LoginIcon /><MenuItem onClick={handleMenuClose} style={{ fontWeight: 'bold', color: '#1976d2' }}>Log Out</MenuItem>
      </Link>}

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handleClickOpen('paper')}>
        <IconButton
          size="large"
          aria-label="show 17 items in cart"
          color="inherit"
        >
          <Badge badgeContent={numOfCartItems} color="error">
            <Cart />
          </Badge>
        </IconButton>

        Cart Items

      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LoginIcon />
        </IconButton>
        {!isLogged && <p>Log In</p>}
        {isLogged && <p>Log Out</p>}
      </MenuItem>
    </Menu>
  );

  function deleteFromCart(cartItems, productId) {
    let newCartArray = cartItems.slice();
  
    for (let i = 0; i < newCartArray.length; i++) {
      if (newCartArray[i].productId === productId) {
        newCartArray.splice(i, 1);
        setcartItems(newCartArray);
        console.log(newCartArray[i].productDesc + " deleted from cart");
        console.log(cartItems);
        break;
      }
    }
  }


  return (
    <Box sx={{ flexGrow: 1 }}>

      {/* CART MODAL */}
      <div>
        {/* <Button onClick={handleClickOpen('paper')}>Cart</Button> */}
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Hi, {firstname} <b style={{ float: 'right' }}>K {cartTotal} </b>.00 </DialogTitle>
          <DialogContent dividers={scroll === 'paper'} style={{ padding: 1, margin: 0 }}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
              style={{ padding: 0, margin: 0 }}
            >
              {isLogged &&

                <TableContainer style={{ margin: 0 }}>
                  <Table stickyHeader sx={{ minWidth: '95%' }} aria-label="spanning table" style={{ width: '95%' }}>
                    <TableHead >
                      <TableRow>
                        <TableCell style={{ color: 'orange' }} align="center" colSpan={4}>
                          Double click to remove
                        </TableCell>

                      </TableRow>
                      <TableRow>
                        <TableCell>Desc</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Unit</TableCell>
                        <TableCell align="right">Sum</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {

                        cartItems.map((row) => (
                          // <IconButton>
                          <TableRow hover onDoubleClick={() => deleteFromCart(cartItems, row.productId)}>
                            <TableCell>{row.productDesc}</TableCell>
                            <TableCell align="right">{row.productQty}</TableCell>
                            <TableCell align="right">{row.productPrice}</TableCell>
                            <TableCell align="right">{row.productSum}</TableCell>
                          </TableRow>
                          // </IconButton>
                        ))
                      }

                      <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Discount</TableCell>
                        <TableCell align="right">0%</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{cartTotal}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              }

              {!isLogged &&
                <p>You need to log in first</p>
              }
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' color='error' onClick={handleClose}>Cancel</Button>
            <Button variant='contained' color='success' onClick={handleClose}>Checkout</Button>
          </DialogActions>
        </Dialog>
      </div>

      {/* END CART MODAL */}




      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <AirIcon fontSize='large' />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >

            ePlug
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for product.."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleClickOpen('paper')}
            >
              <Badge badgeContent={numOfCartItems} color="error">
                <Cart />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <LoginIcon />

            </IconButton>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}