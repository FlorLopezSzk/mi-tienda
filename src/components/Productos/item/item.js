import React from 'react';
import './item.css';
import { useState } from 'react';
import { Card, Button, CardTitle,CardImg, CardText, Row, Col, Spinner} from 'reactstrap';
import { Link } from 'react-router-dom'

import ContenedorContador from '../../Contador/Contenedor.js'
export default function Item({productos}) {
  
    return(
          <div className="contItems">
            {productos.map((p)=>
                <Card key={p.id} style={{ width: '18rem', margin:'10px' }}>
                  <Link to={`/item/{p.id}`}>
                    <CardTitle className="card-titulo" tag="h5">
                        {p.id}
                    </CardTitle>
                  </Link>
                    
                    <CardImg variant="top" src={p.thumbnail} />
                    <CardText>
                      ${p.price}
                    </CardText>
                    <ContenedorContador min='0' max='10'>Agregar</ContenedorContador>
                </Card>
              )}
          </div>
    )
} 