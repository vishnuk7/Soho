import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

export default function Card({ product }) {
	return (
		<Link to={`/SingleProduct/${product.id}`} className='col-md-4'>
			<div class='card m-2'>
				<img src={product.image} class='card-img-top' alt='...' />
				<div class='card-body'>
					<h5 class='card-title'>{product.name}</h5>
					<h4>&#8377;{product.price}</h4>
					{/* <p class='card-text'>{product.desc}</p> */}
				</div>
			</div>
		</Link>
	);
}
