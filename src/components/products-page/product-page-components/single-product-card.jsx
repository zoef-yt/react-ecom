import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SecondHeartIcon, PlusIcon, MinusIcon, TrashIcon } from '../../../assets/svg/svg';
import { useMyCart, useWishlist, useAuth, useModal } from '../../../context/index.js';

const SingleProductCard = (props) => {
	const { user } = useAuth();
	const { openModal } = useModal();

	const { toggleWishlist, wishlist } = useWishlist();
	const { myCart, addToCart, removeFromCart, changeCartQuantity } = useMyCart();

	const isInCart = myCart.findIndex((p) => p._id === props._id) === -1 ? false : true;
	const inCartItem = myCart.find((p) => p._id === props._id);

	const isWishListed = wishlist.findIndex((product) => product._id === props._id) === -1 ? false : true;

	const navigate = useNavigate();

	const openAuthModal = () => {
		openModal('AuthModal');
	};

	return (
		<div className='card' onClick={() => navigate(`/products/${props._id}`)}>
			<div className='card-overlay-holder'>
				<img className='card-img' src={props.image} alt={props.name} />
				<div className='card-overlay'>
					<img src={props.image2} alt={props.name + '2'} />
				</div>
			</div>
			<div
				onClick={(e) => {
					e.stopPropagation();
					user ? toggleWishlist(props) : openAuthModal();
				}}
				className={isWishListed ? 'fav-holder-selected' : 'fav-holder'}
			>
				<SecondHeartIcon />
			</div>

			<div className='card-rating'>{props.rating}</div>
			<div className='card-rating-2'>{props.rating}</div>
			<div className='card-footer flex-column justify-content-center align-items-center'>
				<h5 className='product-heading'>{props.name}</h5>
				{props.inStock ? (
					<>
						{props.hasOffer ? (
							<p>
								<span className='previous-price text-grey'>₹{props.price.toLocaleString()}</span>
								<span className='current-price'>₹{props.offerPrice.toLocaleString()}</span>
								<span className='offer-price-message'>{` (${(
									((props.price - props.offerPrice) / props.price) *
									100
								).toFixed()}% OFF)`}</span>
							</p>
						) : (
							<p className='current-price'>₹{props.price.toLocaleString()}</p>
						)}
						{isInCart ? (
							<button
								onClick={(e) => {
									e.stopPropagation();
									user ? navigate('/myCart') : openAuthModal();
								}}
								className='btn btn-products flex-row justify-content-center btn-primary'
							>
								Go to Cart
							</button>
						) : (
							<button
								onClick={(e) => {
									e.stopPropagation();
									user ? (addToCart(props), navigate('/myCart')) : openAuthModal();
								}}
								className='btn btn-products btn-primary'
							>
								Buy Now!
							</button>
						)}
						{isInCart ? (
							<div className='flex-row space-between align-items-center btn-products'>
								<button
									onClick={(e) => {
										e.stopPropagation();
										inCartItem.qty > 1 ? changeCartQuantity(props, -1) : removeFromCart(props);
									}}
									className='btn  btn-secondary btn-quantity'
								>
									{inCartItem.qty > 1 ? <MinusIcon /> : <TrashIcon />}
								</button>
								<h3>{inCartItem.qty}</h3>
								<button
									onClick={(e) => {
										e.stopPropagation();
										changeCartQuantity(props, 1);
									}}
									className='btn flex-row justify-content-center btn-secondary btn-quantity'
								>
									<PlusIcon />
								</button>
							</div>
						) : (
							<>
								<button
									onClick={(e) => {
										e.stopPropagation();
										user ? addToCart(props) : openAuthModal();
									}}
									className='btn flex-row justify-content-center btn-products btn-secondary'
								>
									Add to Cart
								</button>
							</>
						)}
					</>
				) : (
					<>
						<p>Out of Stock</p>
						<button
							onClick={(e) => {
								e.stopPropagation();
							}}
							className='btn btn-products btn-products-disabled'
						>
							Buy Now!
						</button>
						<button
							onClick={(e) => {
								e.stopPropagation();
							}}
							className='btn btn-products btn-products-disabled'
						>
							Add to Cart
						</button>
					</>
				)}
			</div>

			<div className='card-badge'>
				{' '}
				<p>{props.offer}</p>{' '}
			</div>
		</div>
	);
};

export { SingleProductCard };
