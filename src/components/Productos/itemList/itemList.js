import React from 'react';
import './itemList.css';
import Item from '../item/item.js';
import {   Card, Button, CardImg, CardTitle, CardText, CardDeck,
	CardSubtitle, CardBody, Row } from 'reactstrap';

import { useState } from 'react';

const ItemList = (props) =>{
    return(
		<div className=" container containerList">
			
			<Row>
				<Item></Item>
				<Item></Item>
				<Item></Item>
			</Row>
			<Button color="primary">Explorar mas...</Button>
		</div>
			
			
		
			
        
    )
}

export default ItemList;