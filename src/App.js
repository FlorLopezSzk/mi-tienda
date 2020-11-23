import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from  'react-router-dom';

import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/home.js';
import CarritoContenedor from './components/Carrito/contenedor.js';
import ItemDetailContainer from './components/Productos/itemDetailContainer/itemDetailContainer.js';




function App() {
  let mensaje = "Bienvenido a Mi Tienda ♥"
  return ( 
    <BrowserRouter>
    <NavBar/> 
    <Switch>
    <Route path='/item/:id' render={() => <ItemDetailContainer />}/> 
    <Route path='/carrito' render={() => <CarritoContenedor />}/>
    <Route path='/' render={() => <Home greeting={mensaje}/>} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
