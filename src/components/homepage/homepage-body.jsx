import React from 'react';
import { featuredData } from '../../data/featured-data';

const HomepageBody = () => {
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
			<a className='btn btn-primary flex-column text-align-center' href='./screens/product-listing-page/product-listing-page.html'>
				<h3> Find More Products-{'>'} </h3>
			</a>
			<h2>Featured Items</h2>

			<section id='feature-section' className='feature-section'>
				<div className='features-row'>
					{featuredData.map((item) => (
						<FeaturedCard
							key={item.id}
							image={item.image}
							inStock={item.inStock}
							name={item.name}
							offer={item.offer}
							hasOffer={item.hasOffer}
							type={item.type}
						/>
					))}
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
					{<p>{props.inStock ? props.offer : 'Releasing:TBH'}</p>}
					<p>{props.name}</p>
					{props.inStock && <button className='btn btn-primary'>Buy Now</button>}
					<p>Available: {props.type}</p>
				</div>
			</div>

			{props.inStock ? (
				props.hasOffer && (
					<div className='card-badge'>
						{' '}
						<p>{props.offer}</p>{' '}
					</div>
				)
			) : (
				<div className='card-badge'>
					{' '}
					<p>Out of Stock</p>{' '}
				</div>
			)}
		</div>
	);
};
