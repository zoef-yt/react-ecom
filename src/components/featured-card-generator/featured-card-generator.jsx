import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductsData } from '../../context/data/data-context';

const FeaturedCardGenerator = () => {
	const { featuredProducts } = useProductsData();
	const [randomData, setRandomProducts] = useState([]);
	useEffect(() => {
		const productsData = featuredProducts.data;
		const data = [...productsData].sort(() => Math.random() - 0.5);
		setRandomProducts(data);
	}, [featuredProducts]);

	return (
		<>
			{featuredProducts.loading ? (
				<div>LOADING AWESOMENESS.........</div>
			) : (
				randomData.map((item) => {
					const { _id, id, image, name, offerMessage, inStock, type, hasOffer, fastDelivery } = item;
					return randomData.length > 0 ? (
						<FeaturedCard
							key={id}
							id={_id}
							image={image}
							inStock={inStock}
							name={name}
							offer={offerMessage}
							hasOffer={hasOffer}
							type={type}
							fastDelivery={fastDelivery}
						/>
					) : (
						<></>
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

				<div onClick={() => Navigate(`/products/${props.id}`)} className='card-overlay'>
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
