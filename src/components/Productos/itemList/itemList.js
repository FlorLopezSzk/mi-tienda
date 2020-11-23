import React, {useState, useEffect} from 'react';
import Item from '../item/item.js';
import './itemList.css';

const ItemList = () =>{
	const [productos, setProductos] = useState([]);
	useEffect(()=>{
		fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1271&limit=20')
		.then((respuestaFetch) => respuestaFetch.json())
		.then((data) => setProductos(data.results));
	},[])
    return (
		<Item productos={productos}/>
  )
}

export default ItemList;