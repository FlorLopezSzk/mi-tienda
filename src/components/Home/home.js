import React, {useState} from 'react';
import './home.css';
import ItemList from '../Productos/itemList/itemList.js';
import ItemDetailContainer from '../Productos/itemDetailContainer/itemDetailContainer.js';

import { Spinner } from 'reactstrap';
const Home = (props) =>{
	const spiner = <div><Spinner type="grow" color="dark" /><Spinner type="grow" color="dark" /><Spinner type="grow" color="dark" /><Spinner type="grow" color="dark" /><Spinner type="grow" color="dark" /><Spinner type="grow" color="dark" /><Spinner type="grow" color="dark" /></div>
	const[mostrar, setMostrar] = useState(spiner);
	const listado = new Promise((resolve, reject) =>{
		setTimeout(function(){ resolve(true); }, 2000);
	})
	listado.then(result=>{
		setMostrar(<ItemList></ItemList>)
	})
	
    return(
    	<div className="container containerHome">
		        <div className="inicio">
		            <h1>{props.greeting}</h1>
					</div>
					<div>
					{/* {mostrar} */}
				</div>
				<ItemDetailContainer></ItemDetailContainer>
		</div>
        
    )
}

export default Home;