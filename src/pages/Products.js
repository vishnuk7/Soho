import React from 'react';
import Nav from './Nav';
import '.././style/Products.css';
import jsonData from '../data/products.json';
import Card from './components/Card';

export default function Home() {
	const products = JSON.parse(JSON.stringify(jsonData));
	console.log(products);

	return (
		<div className='container row-home'>
			<Nav />
			{/* <div className="row row-home no-gutters">
        <div className="col-md-5 align-self-center p-5 text-center">
          <h1>hehe</h1>
        </div>

        <div className="col-md-7">
          <h1>hehe</h1>
        </div>
      </div> */}
			<div className='row'>
				<div class='card-group'>
					{products.map((product) => (
						<Card product={product} />
					))}
				</div>
			</div>
		</div>
	);
}
