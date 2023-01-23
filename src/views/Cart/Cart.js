import './Cart.css';

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
import { useContext } from 'react';
import { ProductsContext, ProductsDispatchContext } from '../../context/ProductsContext';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Cart() {

    const products = useContext(ProductsContext);
    const dispatch = useContext(ProductsDispatchContext);

    let totalPrice = 0;

    if (products.basket) {
        products.basket.map(product => {
            totalPrice += product.price;
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2} style={{ marginTop: "1rem" }}>

                <Grid item xs={9} style={{ textAlign: "left" }}>
                    <img src="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673795179/1500x250PCbanneFeb22_srnb6y.jpg" alt="Smiley face" style={{ width: "100%" }} />
                </Grid>

                <Grid item xs={3} style={{ textAlign: "left" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Subtotal ({products?.basket?.length} items): ${totalPrice}
                            </Typography>
                            <Typography gutterBottom component="p">
                                This order contains a gift
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: "center" }}>
                            <Button size="small" variant="contained" style={{ backgroundColor: "orange" }}>Proceed to Checkout</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} style={{ textAlign: "left", fontSize: "bold" }}>
                    <h2>Hello, laurent.mb19@gmail.com</h2>
                </Grid>

                <Grid item xs={12} style={{ textAlign: "left", fontSize: "bold" }}>
                    <h1>Your shopping Basket</h1>
                </Grid>

                <hr />

                {products.basket.map((product, id) => {
                    return (
                        <Grid key={id} item xs={12} style={{ textAlign: "left" }}>
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
                                    <Button size="small" variant="contained" style={{ backgroundColor: "orange" }} onClick={() => { dispatch({ type: 'REMOVE_FROM_BASKET', item: { id: product.id, title: product.title, image: product.image, price: product.price, rating: product.rating } }) }}>Remove from Basket</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}

            </Grid>
        </Box>
    )
}

export default Cart;
