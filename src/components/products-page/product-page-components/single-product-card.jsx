import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SecondHeartIcon, PlusIcon, MinusIcon, TrashIcon } from '../../../assets/svg/svg';
import { useMyCart, useWishlist, useAuth, useModal } from '../../../context/index.js';

const SingleProductCard = (props) => {
	const { user } = useAuth();
	const { toggleModal } = useModal();

	const { toggleWishlist, wishlist } = useWishlist();
	const { myCart, addToCart, removeFromCart, changeCartQuantity } = useMyCart();

	const isInCart = myCart.findIndex((p) => p.id === props.id) === -1 ? false : true;
	const inCartItem = myCart.find((p) => p.id === props.id);

	const isWishListed = wishlist.findIndex((product) => product.id === props.id) === -1 ? false : true;

	const Navigate = useNavigate();

	const openAuthModal = () => {
		toggleModal();
	};

	return (
		<div className='card'>
			<div className='card-overlay-holder'>
				<img className='card-img' src={props.image} alt={props.name} />
				<div className='card-overlay'>
					<img src={props.image2} alt={props.name + '2'} />
				</div>
			</div>
			<div onClick={user ? () => toggleWishlist(props) : () => openAuthModal()} className={isWishListed ? 'fav-holder-selected' : 'fav-holder'}>
				<SecondHeartIcon />
			</div>

			<div className='card-footer flex-column justify-content-center align-items-center'>
				<h5 onClick={() => props.onClick()} className='product-heading'>
					{props.name}
				</h5>
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
								onClick={user ? () => Navigate('/myCart') : () => openAuthModal()}
								className='btn btn-products flex-row justify-content-center btn-primary'
							>
								Go to Cart
							</button>
						) : (
							<button
								onClick={
									user
										? () => {
												addToCart(props);
												Navigate('/myCart');
										  }
										: () => openAuthModal()
								}
								className='btn btn-products btn-primary'
							>
								Buy Now!
							</button>
						)}
						{isInCart ? (
							<div className='flex-row space-between align-items-center btn-products'>
								<button
									onClick={inCartItem.quantity > 1 ? () => changeCartQuantity(props, -1) : () => removeFromCart(props)}
									className='btn  btn-secondary btn-quantity'
								>
									{inCartItem.quantity > 1 ? <MinusIcon /> : <TrashIcon />}
								</button>
								<h3>{inCartItem.quantity}</h3>
								<button
									onClick={() => changeCartQuantity(props, 1)}
									className='btn flex-row justify-content-center btn-secondary btn-quantity'
								>
									<PlusIcon />
								</button>
							</div>
						) : (
							<>
								<button
									onClick={user ? () => addToCart(props) : () => openAuthModal()}
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
						<button className='btn btn-products btn-products-disabled'>Buy Now!</button>
						<button className='btn btn-products btn-products-disabled'>Add to Cart</button>
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
