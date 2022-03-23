//@ts-check
import React from 'react';
import { ShoppingCartIcon, HeartIcon, SunIcon, HalfMoonIcon } from '../../assets/svg/svg';
import { useTheme } from '../../context/theme/theme-context';
import { Link, NavLink } from 'react-router-dom';
import '../css/header.css';
import { useWishlist } from '../../context/wishlist/wishlist-context';
import { useMyCart } from '../../context/mycart/mycart-context';
import { useModal } from '../../context/modal/modal-context';
import { useAuth } from '../../context/auth/auth-context';

const Header = () => {
	const { theme, toggleTheme } = useTheme();
	const { wishlist } = useWishlist();
	const { myCart } = useMyCart();
	const totalCartQuantity = myCart.reduce((acc, prd) => acc + prd.quantity, 0);
	const { toggleModal } = useModal();
	const { isLogin, user, logoutHandler } = useAuth();

	return (
		<nav className='homepage-navbar'>
			<div className='navbar-brand'>
				<Link to='/'>
					<h1>Need Games</h1>
				</Link>
			</div>
			<input type='search' className='text-field' placeholder='Search For Games' />
			<div className='navbar-cta'>
				{user && (
					<>
						<NavLink to='/wishlist' className='badge-holder flex-column'>
							<HeartIcon className='header-icon' />

							{wishlist && wishlist.length > 0 ? (
								<div className='badge-icon'>{wishlist.length > 9 ? '9+' : wishlist.length}</div>
							) : (
								<></>
							)}
						</NavLink>

						<NavLink to='/myCart' className='badge-holder flex-column'>
							<ShoppingCartIcon className='header-icon' />
							{totalCartQuantity > 0 ? <div className='badge-icon'>{totalCartQuantity > 9 ? '9+' : totalCartQuantity}</div> : <></>}
						</NavLink>
					</>
				)}
				<div onClick={toggleTheme}>{theme === 'dark' ? <SunIcon className='header-icon' /> : <HalfMoonIcon className='header-icon' />}</div>
				{user != null ? (
					<div className='badge-holder'>
						<img
							className='avatar avatar-sm'
							src='https://media-exp1.licdn.com/dms/image/C4E03AQEm0ZBjaIr1hg/profile-displayphoto-shrink_200_200/0/1610261504692?e=1649894400&v=beta&t=kKO77EwqflEDsrZf5eG7xC7ZUB4hD_BkZuRJyFiFHbI'
						/>
						<div className='profile-modal'>
							<li>My Profile</li>
							<hr />
							<li className='cart-icon'>My Cart</li>
							<hr />
							<li className='wishlist-icon'>My Wishlist</li>
							<hr />
							<li onClick={() => logoutHandler()}>Logout 😞</li>
						</div>
					</div>
				) : (
					<button onClick={() => toggleModal()} className='btn btn-link'>
						Hello, {isLogin ? 'Login' : 'Sign Up'}
					</button>
				)}
			</div>
		</nav>
	);
};

export { Header };
