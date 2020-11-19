import React from 'react';
import './item.css';
import { useState } from 'react';
//import foto from '../imagenes/ropa1.jpg'
import { Card, Button, CardTitle,CardImg, CardText, Row, Col } from 'reactstrap';
const Item = () =>{
    return(
            <Card  className="card-body">
              <CardTitle className="card-titulo" tag="h5">Kimono flower</CardTitle>
              <CardImg className="imagen" width="100%" src="https://http2.mlstatic.com/D_NQ_NP_2X_930662-MLA43362437724_092020-F.webp" alt="Card image cap" />
              <p>
              Una opción más elegante estampado de flores sobre fondo negro. Ideal para darle un toque especial a los looks.
              </p>
              <Button className="button"> + Agregar</Button>
            </Card>
    )
} 

export default Item;