import React from 'react';
import { ShoppingCartIcon, HeartIcon, SunIcon, HalfMoonIcon } from '../../assets/svg/svg';
import { useTheme } from '../../context/theme/theme-context';
import { Link, NavLink } from 'react-router-dom';
import '../css/header.css';
import { useWishlist } from '../../context/wishlist/wishlist-context';
import { useMyCart } from '../../context/mycart/mycart-context';

const Header = () => {
	const { theme, toggleTheme } = useTheme();
	const { wishlist } = useWishlist();
	const { myCart } = useMyCart();
	const totalCartQuantity = myCart.reduce((acc, prd) => acc + prd.quantity, 0);

	return (
		<nav className='homepage-navbar'>
			<div className='navbar-brand'>
				<Link to='/'>
					<h1>Need Games</h1>
				</Link>
			</div>
			<input type='search' className='text-field' placeholder='Search For Games' />
			<div className='navbar-cta'>
				<NavLink to='/wishlist' className='badge-holder flex-column'>
					<HeartIcon className='header-icon' />

					{wishlist && wishlist.length > 0 ? <div className='badge-icon'>{wishlist.length > 9 ? '9+' : wishlist.length}</div> : <></>}
				</NavLink>

				<NavLink to='/myCart' className='badge-holder flex-column'>
					<ShoppingCartIcon className='header-icon' />
					{totalCartQuantity > 0 ? <div className='badge-icon'>{totalCartQuantity > 9 ? '9+' : totalCartQuantity}</div> : <></>}
				</NavLink>
				<div onClick={toggleTheme}>{theme === 'dark' ? <SunIcon className='header-icon' /> : <HalfMoonIcon className='header-icon' />}</div>
				<button className='btn btn-link'>Hello, Login</button>
			</div>
		</nav>
	);
};

export { Header };
