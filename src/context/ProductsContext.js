import { createContext, useReducer } from "react";
import Home from "../components/Home/Home";

export const ProductsContext = createContext(null);
export const ProductsDispatchContext = createContext(null);

const state = {
    initialProducts: [
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
    ],
    basket: [],
    user: {},
}

export function ProductsProvider({ children }) {

    const [products, dispatch] = useReducer(
        productsReducer,
        state
    );

    return (
        <ProductsContext.Provider value={products}>
            <ProductsDispatchContext.Provider value={dispatch}>
                <Home />
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
            return state.filter(product => product.id !== action.item.id);
        }

    }
}
