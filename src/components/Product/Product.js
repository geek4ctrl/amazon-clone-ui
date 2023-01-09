import './Product.css';
import Header from '../Header/Header';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Product(products) {

    products = [
        {
            id: 1,
            title: 'Gaming Accessories',
            image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673202752/photo-1546435770-a3e426bf472b_br5qvt.avif',
            price: '598',
            rating: '5'
        },
        {
            id: 2,
            title: 'Gaming Accessories',
            image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673202752/photo-1546435770-a3e426bf472b_br5qvt.avif',
            price: '598',
            rating: '4'
        },
        {
            id: 3,
            title: 'Gaming Accessories',
            image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673202752/photo-1546435770-a3e426bf472b_br5qvt.avif',
            price: '598',
            rating: '3'
        },
        {
            id: 4,
            title: 'Gaming Accessories',
            image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673202752/photo-1546435770-a3e426bf472b_br5qvt.avif',
            price: '598',
            rating: '4'
        },
    ]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ marginTop: "1rem" }}>

                {products.map((product) => {
                    return (
                        <Grid item xs={3} style={{ textAlign: "-webkit-center" }}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography gutterBottom component="p">
                                        $ {product.price}
                                    </Typography>
                                    <Typography gutterBottom component="p">
                                        {product.rating} Stars
                                    </Typography>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={product.image}
                                        title="green iguana"
                                    />
                                </CardContent>
                                <CardActions style={{ justifyContent: "center" }}>
                                    <Button size="small" variant="contained" style={{ backgroundColor: "orange" }}>Add to Basket</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}



                {/* <Grid item xs={3}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=8</Item>
                </Grid> */}

            </Grid>
        </Box>
    )
}

export default Product;
