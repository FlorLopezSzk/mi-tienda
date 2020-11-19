import React from 'react';
import {BrowserRout, Switch, Route} from  'react-router-dom';

import logo from './logo.svg';

import './App.css';
//import Home from './Home/home.js';


function App() {
  let mensaje = "Bienvenido a Mi Tienda ♥"
  return ( 
  <div>
    <BrowserRout>
      <Switch>
        <Route exact path='/home'>
          <Home greeting={mensaje}/>
        </Route>
      </Switch>
    </BrowserRout>
  </div>

  );
}

export default App;
