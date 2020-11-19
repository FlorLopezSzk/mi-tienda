import React, {useState, useEffect} from 'react';

import './itemList.css';
import Item from '../item/item.js';
import { Button, Row } from 'reactstrap';
const ItemList = () =>{
	const [productos, setProductos] = useState([]);
	useEffect(()=>{
		const getProductos = fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1271&limit=20');
		getProductos
		.then((respuestaFetch) =>{
			const data = respuestaFetch.json();
			return data;
		})
		.then((data)=>{
			setProductos(data.results);
		})
	},[])
	useEffect(()=>{
		//console.log("productos", productos)
	},[productos])
    return(
		<div>
			<ul>
				<Item/>
			</ul>
			<Button color="primary">Explorar mas...</Button>
		</div>
  
    )
}

export default ItemList;