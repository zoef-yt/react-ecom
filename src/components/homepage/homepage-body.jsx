import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProductsData, useFilter } from '../../context/index.js';
import { FeaturedCardGenerator } from '../allComponent.jsx';

const HomepageBody = () => {
	const { featuredProducts, products } = useProductsData();
	const { FilterDispatch } = useFilter();

	useEffect(() => {
		FilterDispatch({
			type: 'SET_DATA',
			payload: products.data,
		});
	}, [products]);
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
			<h2>Categories</h2>
			<section className='category-section'>
				<CategoryCard title='games' />
				<CategoryCard title='consoles' />
				<CategoryCard title='accessories' />
			</section>

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

const CategoryCard = (props) => {
	const { FilterDispatch } = useFilter();
	const navigate = useNavigate();

	const navigateToProductsPage = () => {
		FilterDispatch({ type: 'TYPES_OF_PRODUCT', payload: props.title });
		navigate('/products');
	};
	return (
		<div onClick={navigateToProductsPage} className='card card-md category-card'>
			<div className='card-body card-overlay-holder'>
				<img className='card-img' src='https://i.ytimg.com/vi/_NX8F9FBvg0/maxresdefault.jpg' loading='lazy' alt='console' />

				<div className='category-title'>{props.title}</div>
			</div>
		</div>
	);
};
