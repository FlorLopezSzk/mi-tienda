import React, {useState} from 'react';

import Item from '../item/item.js';
import ItemD from '../itemDetail/itemDetail.js';
import './itemDetailContainer.css';


import {Spinner } from 'reactstrap';


const ItemDetailContainer = (props) =>{
    const spiner = 
    <div>
        <Spinner type="grow" color="dark" />
        <Spinner type="grow" color="dark" />
        <Spinner type="grow" color="dark" />
        Cargando...
        <Spinner type="grow" color="dark" />
        <Spinner type="grow" color="dark" />
        <Spinner type="grow" color="dark" />
    </div>
	const[item, setItem] = useState(spiner);
	const cambiar = new Promise((resolve, reject) =>{
		setTimeout(function(){ resolve(true); }, 3000);
	})
	cambiar.then(result=>{
		setItem(<ItemD></ItemD>)
	})
    return(
    	<div>
		   {item}
		</div>
        
    )
}
//<ItemDetail item={item}></ItemDetail>
export default ItemDetailContainer;