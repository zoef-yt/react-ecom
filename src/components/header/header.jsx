import React from 'react';
import { ShoppingCartIcon, HeartIcon } from '../../assets/svg/svg';
import '../css/header.css';
const Header = () => {
	return (
		<nav className='homepage-navbar'>
			<div className='navbar-brand'>
				<a href='eslint-bruh'>
					{' '}
					<h1>Need Games</h1>{' '}
				</a>
			</div>
			<input type='search' className='text-field' placeholder='Search For Games' />
			<div className='navbar-cta'>
				<HeartIcon className='wishlist-icon' />
				<ShoppingCartIcon className='cart-icon' />
				<a href='eslint-bruh' id='login-text' className='btn btn-link'>
					Hello, Login
				</a>
			</div>
		</nav>
	);
};

export { Header };
