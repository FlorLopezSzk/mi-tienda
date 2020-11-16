import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; 
import * as serviceWorker from './serviceWorker';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/home.js';
import Item from './components/Productos/item/item.js';
//Aca traer boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
let mensaje = "Bienvenido a Mi Tienda ♥"
ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Home greeting={mensaje}/>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
