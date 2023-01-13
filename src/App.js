import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import { Component, useReducer, useState } from 'react';

import React from 'react';
import ReactDOM from 'react-dom';

import { ProductsProvider } from './context/ProductsContext';

export default function App() {

  return (
    <ProductsProvider>
      <Home />
    </ProductsProvider>
  );
}

