import React, {useState} from 'react';
import {   Card, Button, Row, Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom'

const ItemD = (props) =>{
	const idItem = useParams();
    return(
		<div>
			<h1>Aqui va el detalle del item</h1>
		</div> 
    )
}

export default ItemD;
/*
	<Card>
		<h2>Conjunto Kimono + Short</h2>
		<img className="imagenDos" src="https://http2.mlstatic.com/D_NQ_NP_2X_930662-MLA43362437724_092020-F.webp"/>
		
		<p>
			Una opción más elegante estampado de flores sobre fondo negro. Ideal para darle un toque especial a los looks.
		</p>
		<p>
			Conjunto Kimono + Short: Kimono Forrado con Lazo y Bolsillos.Short Forrado - Con Lazo
		</p>
			<Row>
				<h3 className="precio">$750</h3>
				<div className="agregar" >
				<Button color="success" onClick={editar}>{nombre}</Button>
				</div>
			</Row>
			
	</Card>
*/