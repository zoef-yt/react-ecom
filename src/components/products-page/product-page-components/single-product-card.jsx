import React from 'react';
import { SecondHeartIcon } from '../../../assets/svg/svg';

const SingleProductCard = (props) => {
	return (
		<div className='card'>
			<div className='card-overlay-holder'>
				<img className='card-img' src={props.image} alt={props.name} />
				<div className='card-overlay'>
					<img src={props.image2} alt={props.name + '2'} />
				</div>
			</div>
			<div className='fav-holder'>
				<SecondHeartIcon />
			</div>

			<div className='card-footer flex-column justify-content-center align-items-center'>
				<h5 className='product-heading'>{props.name}</h5>
				{props.inStock ? (
					<>
						<p>${props.price}</p>
						<button className='btn btn-primary'>Buy Now!</button>
						<button className='btn btn-secondary'>Add to Cart</button>
					</>
				) : (
					<p>Out of Stock</p>
				)}
			</div>

			<div className='card-badge'>
				{' '}
				<p>{props.inStock ? props.offer : 'OUT OF STOCK'}</p>{' '}
			</div>
		</div>
	);
};

export { SingleProductCard };
