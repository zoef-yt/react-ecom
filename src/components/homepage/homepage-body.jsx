import React from 'react';
import { Link } from 'react-router-dom';
import { useProductsData } from '../../context/data/data-context';
import { FeaturedCardGenerator } from '../allComponent.jsx';

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
				<div style={{ gridTemplateColumns: featuredProducts && `repeat(${featuredProducts.data.length}, 1fr)` }} className='features-row'>
					<FeaturedCardGenerator />
				</div>
			</section>
		</main>
	);
};

export { HomepageBody };
