import React from 'react';
 import { Switch, Route, BrowserRouter} from 'react-router-dom';

import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; 
import * as serviceWorker from './serviceWorker';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/home.js';

//Aca traer boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
let mensaje = "Bienvenido a Mi Tienda ♥"
ReactDOM.render(
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/home'>
        <Home greeting={mensaje}/>
        </Route>
      </Switch>
    </div>
</BrowserRouter>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

