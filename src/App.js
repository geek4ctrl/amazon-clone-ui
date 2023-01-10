import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import { useState } from 'react';

import React from 'react';
import ReactDOM from 'react-dom';

export const basketContext = React.createContext();
export const user = React.createContext();

function App() {

  const [basket, setUserBasket] = useState([]);
  const [userInfo, setUser] = useState({});

  function total() {
    return basket.length
  }

  return (
    <Home />
  );
}

export default App;
