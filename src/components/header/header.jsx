import React from 'react';
import { ShoppingCartIcon, HeartIcon, SunIcon, HalfMoonIcon } from '../../assets/svg/svg';
import { useTheme } from '../../context/theme/theme-context';
import '../css/header.css';
const Header = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<nav className='homepage-navbar'>
			<div className='navbar-brand'>
				<a href='/'>
					<h1>Need Games</h1>
				</a>
			</div>
			<input type='search' className='text-field' placeholder='Search For Games' />
			<div className='navbar-cta'>
				<HeartIcon className='wishlist-icon' />
				<ShoppingCartIcon className='cart-icon' />
				<div onClick={toggleTheme}>{theme === 'dark' ? <SunIcon className='cart-icon' /> : <HalfMoonIcon className='cart-icon' />}</div>
				<a href='eslint-bruh' className='btn btn-link'>
					Hello, Login
				</a>
			</div>
		</nav>
	);
};

export { Header };
