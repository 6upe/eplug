import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles({
    Jumbotron: {
        maxWidth: '100%',
        marginTop: 50,
        marginBottom: 50
        // display: 'flex',
        // justifyContent: 'center',
        // alignSelf: 'center',
        // backgroundColor: 'red'
    },
    btn: {
        // backgroundColor: 'red'
    },
    JumboCardContent: {
        marginTop: 20,
        paddingLeft: '5%',
        // backgroundColor: 'red'
    }
});

export default function ImgMediaCard({firstname, isLogged}) {
    const classes = useStyles();
    return (
        <div className={classes.Jumbotron}>
            <Card
                sx={{ maxWidth: '100%' }}
                elevation='0'
            >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="400"
                    image="img.jpg"
                    width={'100%'}
                />
                <div className={classes.JumboCardContent}>
                    <CardContent >
                        <Typography style={{fontWeight: 'bold', color: '#2e7d32'}} gutterBottom variant="h6" component="div">
                          {isLogged && <> Hi {firstname}</>} <br /> Welcome to the [ePlug]
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Our products and services will give you small eyes, big Smiles
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button style={{fontWeight: 'bold'}} size='large' variant='outlined' className={classes.btn} color='success' endIcon={<SendIcon />}>Our Products</Button>
                        {/* <Button size="small">Learn More</Button> */}
                    </CardActions>
                </div>
            </Card>
        </div>
    );
}
