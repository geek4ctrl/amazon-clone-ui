import './App.css';
import React from 'react';
import Home from './views/Home/Home';

import { ProductsProvider } from './context/ProductsContext';

import { BrowserRouter, Route } from "react-router-dom";

export default function App() {

  return (
    <div>
      <ProductsProvider>
      </ProductsProvider>
    </div>
  );
}

