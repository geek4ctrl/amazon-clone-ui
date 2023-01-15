import './Product.css';
import Header from '../../components/Header/Header';

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

function Product() {

    const products = useContext(ProductsContext);
    const dispatch = useContext(ProductsDispatchContext);

    return (
        <Box sx={{ flexGrow: 1 }}>

            <img src="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673177067/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada_elmk9g.jpg" alt="Smiley face" style={{ width: "100%" }} />

            <Grid container spacing={2} style={{ marginTop: "1rem" }}>

                {products.initialProducts.map((product, id) => {
                    return (
                        <Grid key={id} item xs={3} style={{ textAlign: "-webkit-center" }}>
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
                                    <Button size="small" variant="contained" style={{ backgroundColor: "orange" }} onClick={() => { dispatch({ type: 'ADD_TO_BASKET', item: { id: product.id, title: product.title, image: product.image, price: product.price, rating: product.rating } }) }}>Add to Basket</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}

            </Grid>
        </Box>
    )
}

export default Product;
