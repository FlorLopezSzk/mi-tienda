import React, {useState} from 'react';
import {   Card, Button, Row, Spinner } from 'reactstrap';

const ItemD = (props) =>{
	const [nombre, setNombre] = useState("Agregar al carrito")
    const [contador, setContador] = useState(0)
    var resto = 0;
    const editar = () =>{
        setContador(contador + 1)
    resto = contador % 2;
    console.log(resto)
        if(resto != 1){
            setNombre("Eliminar del carrito")
        }else{
            setNombre("Agregar al carrito")
        }
    }
    return(
		<div className="cardDetail">
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
		</div> 
    )
}

export default ItemD;