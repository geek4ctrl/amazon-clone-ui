import { createContext, useReducer, useState } from "react";
import Header from "../components/Header/Header";
import Home from "../views/Home/Home";
import Product from "../views/Product/Product";
import Cart from "../views/Cart/Cart";
import Login from "../views/Login/Login";
import Dashboard from "../views/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useToken from "../components/useToken";

export const ProductsContext = createContext(null);
export const ProductsDispatchContext = createContext(null);

const state = {
    initialProducts: [
        {
            id: 1,
            title: 'Gaming Accessories',
            image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673202752/photo-1546435770-a3e426bf472b_br5qvt.avif',
            price: 598,
            rating: '5'
        },
        {
            id: 2,
            title: 'Gaming Accessories',
            image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673202752/photo-1546435770-a3e426bf472b_br5qvt.avif',
            price: 598,
            rating: '4'
        },
        {
            id: 3,
            title: 'Gaming Accessories',
            image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673202752/photo-1546435770-a3e426bf472b_br5qvt.avif',
            price: 598,
            rating: '3'
        },
        {
            id: 4,
            title: 'Gaming Accessories',
            image: 'https://res.cloudinary.com/dhqvb8wbn/image/upload/v1673202752/photo-1546435770-a3e426bf472b_br5qvt.avif',
            price: 598,
            rating: '4'
        },
    ],
    basket: [],
    user: {},
}


export function ProductsProvider({ children }) {

    const { token, setToken } = useToken();

    const [products, dispatch] = useReducer(
        productsReducer,
        state
    );

    if (!token) {
        return (
            <ProductsContext.Provider value={products}>
                <ProductsDispatchContext.Provider value={dispatch}>
                    <Header />
                    <Login setToken={setToken} />
                </ProductsDispatchContext.Provider>
            </ProductsContext.Provider>
        );
    }

    return (
        <ProductsContext.Provider value={products}>
            <ProductsDispatchContext.Provider value={dispatch}>
                <Header />

                <Routes>
                    <Route exact path="/" element={<Product />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                </Routes>

            </ProductsDispatchContext.Provider>
        </ProductsContext.Provider>
    );

}

function productsReducer(state = state, action) {
    switch (action.type) {

        case 'ADD_TO_BASKET': {
            return {
                ...state,
                basket: [...state.basket, {
                    id: action.item.id,
                    image: action.item.image,
                    price: action.item.price,
                    rating: action.item.rating,
                    title: action.item.title,
                }]
            };
        }

        case 'REMOVE_FROM_BASKET': {
            return {
                ...state,
                basket: [...state.basket.filter(product => product.id !== action.item.id)]
            };
        }

    }
}
