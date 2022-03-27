import React from 'react';
import { useNavigate } from 'react-router-dom';
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
	const Navigate = useNavigate();

	return (
		<div className='card card-md'>
			<div className='card-body card-overlay-holder'>
				<img className='card-img' src={props.image} loading='lazy' alt={props.name} />

				<div onClick={() => Navigate('/products')} className='card-overlay'>
					<p>{props.offer}</p>
					<p className='text-align-center'>{props.name}</p>
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
