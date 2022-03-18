import React from 'react';

import { useProductsData } from '../../context/data/data-context';

const FeaturedCardGenerator = () => {
	const { featuredProducts } = useProductsData();

	return (
		<>
			{featuredProducts.loading ? (
				<div>LOADING AWESOMENESS.........</div>
			) : (
				featuredProducts.data.map((item) => {
					const { id, image, name, offerMessage, inStock, type, hasOffer, fastDelivery } = item;
					return (
						<FeaturedCard
							key={id}
							image={image}
							inStock={inStock}
							name={name}
							offer={offerMessage}
							hasOffer={hasOffer}
							type={type}
							fastDelivery={fastDelivery}
						/>
					);
				})
			)}
		</>
	);
};

const FeaturedCard = (props) => {
	return (
		<div className='card card-md'>
			<div className='card-body card-overlay-holder'>
				<img className='card-img' src={props.image} loading='lazy' alt={props.name} />

				<div className='card-overlay'>
					<p>{props.offer}</p>
					<p className='text-align-center'>{props.name}</p>
					{props.inStock && <button className='btn btn-primary'>Buy Now</button>}
					<p>{props.inStock ? (props.fastDelivery ? 'Delivery Tomorrow' : 'Will be delivered in 7 working days') : ''}</p>
				</div>
			</div>

			<div className='card-badge'>
				<p>{props.offer}</p>
			</div>
		</div>
	);
};

export { FeaturedCardGenerator };
