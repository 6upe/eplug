import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  cardItem: {
    padding: 20
  }
});

export default function RecipeReviewCard({ productName, price, imgName, desc }) {
  const productPrice = "K " + price;
  const classes = useStyles();

  return (
    <div className={classes.cardItem}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              e
            </Avatar>
          }

          title={productName}
          subheader={productPrice}
        />
        <CardMedia
          component="img"
          height="194"
          image={imgName}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          </div>
          
          <IconButton aria-label="buy">
            <Button variant="outlined" color="success" endIcon={<AddShoppingCartIcon />}>
              Buy
            </Button>
          </IconButton>
        </CardActions>

      </Card>
    </div>
  );
}
