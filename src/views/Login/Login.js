import './Login.css';
import Header from '../../components/Header/Header';
import Product from '../Product/Product';

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
import { useContext, useState } from 'react';
import { ProductsContext, ProductsDispatchContext } from '../../context/ProductsContext';

import { ProductsProvider } from '../../context/ProductsContext';
import PropTypes from 'prop-types';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function Login({ setToken }) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);

        localStorage.setItem('username', username);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                <Grid item xs={3} style={{ textAlign: "-webkit-center" }}>

                    <img src="https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673171025/logo-amazon_gzbc3l.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />

                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>

                            <Typography gutterBottom variant="h6" component="div">
                                Sign In
                            </Typography>

                            <form onSubmit={handleSubmit}>
                                <div class="mb-6">
                                    <label style={{ textAlign: "left" }} for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                                    <input style={{ border: "0.01px solid gray", borderRadius: "0px" }} type="email" onChange={e => setUserName(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                </div>

                                <div class="mb-6">
                                    <label style={{ textAlign: "left" }} for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input style={{ border: "0.01px solid gray", borderRadius: "0px" }} type="password" onChange={e => setPassword(e.target.value)} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                </div>

                                <button type="submit" style={{ backgroundColor: "orange", width: "100%", marginBottom: "1rem", color: "black", borderRadius: "0px" }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>

                                <div class="flex items-start mb-6">
                                    <label style={{ textAlign: "left" }} for="remember" class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-100">By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</label>
                                </div>

                                <button type="submit" style={{ width: "100%", marginBottom: "1rem", color: "black", borderRadius: "0px", backgroundColor: "lightgray" }} class="text-black bg-blue-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create your Amazon Account</button>
                            </form>

                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}