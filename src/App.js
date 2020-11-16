import React from 'react';
import logo from './logo.svg';

import './App.css';
//import Home from './Home/home.js';


function App() {
  let mensaje = "Bienvenido a Mi Tienda ♥"
  return (
    <div>
      <Home greeting={mensaje}/>
    </div>
  );
}

export default App;
