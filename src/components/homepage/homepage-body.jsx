import React from 'react';
import { Link } from 'react-router-dom';
import { useProductsData } from '../../context/data/data-context';

const HomepageBody = () => {
	const { featuredProducts } = useProductsData();
	return (
		<main className='homepage-content'>
			<section>
				<div className='card-overlay-holder image'>
					<img src='https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-hero-banner-desktop-03-en-07oct21?$2400px$' alt='' srcSet='' />
					<div className='card-overlay'>
						<h1>NEED GAMES IS ALL YOU NEED!</h1>
						<a href='#feature-section' className='btn btn-link flex-column text-align-center'>
							Checkout Featured
						</a>
					</div>
				</div>
			</section>
			<Link className='btn btn-primary flex-column text-align-center' to='/products'>
				<h3> Find More Products-{'>'} </h3>
			</Link>
			<h2>Featured Items</h2>

			<section id='feature-section' className='feature-section'>
				<div className='features-row'>
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
				</div>
			</section>
		</main>
	);
};

export { HomepageBody };

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
