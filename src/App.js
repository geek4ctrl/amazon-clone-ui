import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <Home />
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  );
}

export default App;
