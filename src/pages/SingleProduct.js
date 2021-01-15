import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import '.././style/SingleProduct.css';
import lady from '.././images/lady.png';
import share from '.././images/share.svg';
import heartBlack from '.././images/heartBlack.svg';
import circleWhite from '.././images/circle-white.svg';
import circleBlack from '.././images/circle-black.svg';
import circleYellow from '.././images/circle-yellow.svg';
import circleRed from '.././images/circle-red.svg';
import circleBlue from '.././images/circle-blue.svg';
import jsonData from '../data/products.json';

export default function Home(props) {
	// const [data, setData] = useState();
	// useEffect(() => {

	// });

	const productId = props.match.params.id;

	// console.log(data);
	const products = JSON.parse(JSON.stringify(jsonData));
	const data = products.filter((product) => product.id == productId)[0];
	console.log(data.image);
	return (
		<div className='container'>
			<Nav />
			<div className='row row-home no-gutters'>
				<div className='col-md-5 align-self-center p-5 text-left'>
					<h1 className='font-weight-bold mb-0 product-title'>{data.name}</h1>
					<p className='pb-2 mb-0 product-desc'>{data.desc}</p>
					<img src={share} className='landing-menu-svg ml-3' />
					<img src={heartBlack} className='landing-menu-svg ml-3 heart' />
				</div>

				<div className='col-md-7'>
					<div className='row no-gutters'>
						<div className='col-md-6'>
							<img src={data.image} className='lady-img float-left' alt='lady-image' />
						</div>
						<div className='col-md-6 align-self-center'>
							<h3 className='product-title'>&#8377;{data.price}</h3>
							<p className='bg-lightPink p-3'>
								Color
								<img src={circleWhite} className='landing-menu-svg ml-3' />
								<img src={circleBlack} className='landing-menu-svg ml-3' />
								<img src={circleYellow} className='landing-menu-svg ml-3' />
								<img src={circleBlue} className='landing-menu-svg ml-3' />
								<img src={circleRed} className='landing-menu-svg ml-3' />
							</p>
							<p className='bg-lightPink p-3 sizeSelector'>
								<p className='ml-3'>XS</p>
								<p>S</p>
								<p>M</p>
								<p>L</p>
								<p>XL</p>
							</p>
							<p className='bg-lightPink p-3 mt-5 addToCart'>Add to Cart</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
