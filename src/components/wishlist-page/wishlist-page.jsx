import React, { useState, useEffect } from 'react';
import '../css/wishlist.css';
import { useProductsData } from '../../context/data/data-context';
import { FeaturedCardGenerator, Header, Footer } from '../allComponent.jsx';
import { useWishlist } from '../../context/wishlist/wishlist-context';
import { MinusIcon, PlusIcon, SecondHeartIcon, TrashIcon } from '../../assets/svg/svg';
import { useMyCart } from '../../context/mycart/mycart-context';
import { useAxios } from '../../custom-hooks/useAxios';

const WishListPage = () => {
	const { featuredProducts } = useProductsData();
	// const { wishlist } = useWishlist();
	const { response: responseWishlist, error: errorWishlist, loading: loadingWishlist, operation: fetchWishlist } = useAxios();

	useEffect(() => {
		if (!responseWishlist) {
			fetchData();
		}
	}, [loadingWishlist]);

	const fetchData = () => {
		fetchWishlist({
			method: 'get',
			url: '/api/user/wishlist',
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
	};

	return (
		<div className='wishlist-homepage'>
			<Header />
			<main>
				<h1 className='text-align-center'> My Wishlist</h1>
				{!loadingWishlist ? (
					<div
						style={responseWishlist.wishlist.length > 0 ? null : { gridTemplateColumns: '1fr', placeItems: 'center' }}
						className='product-main wishlist-page'
					>
						{responseWishlist.wishlist.length > 0 ? (
							<>
								{responseWishlist.wishlist &&
									responseWishlist.wishlist.map((product) => {
										return <WishlistedCard key={product._id} product={product} fetchData={fetchData} />;
									})}
							</>
						) : (
							<h1>You forgot to add some to your wishlist</h1>
						)}
					</div>
				) : (
					<div className='product-main wishlist-page'>
						<h1>Loading...</h1>
					</div>
				)}
			</main>

			<aside className='wishlist-suggestion-section'>
				<section className='suggestions-section'>
					<h1 className='text-align-center'>Suggestions</h1>
					<div style={{ gridTemplateColumns: featuredProducts && `repeat(${featuredProducts.data.length}, 1fr)` }} className='features-row'>
						<FeaturedCardGenerator />
					</div>
				</section>
			</aside>

			<Footer />
		</div>
	);
};

export { WishListPage };

const WishlistedCard = (props) => {
	const [removingItem, setRemovingItem] = useState(false);
	const { toggleWishlist } = useWishlist();
	const { myCart, addToCart, changeCartQuantity, removeFromCart } = useMyCart();
	const isInCart = myCart.findIndex((item) => item._id === props.product._id) === -1 ? false : true;
	const inCartItem = myCart.find((p) => p._id === props.product._id);
	const removeFromWishlist = (product) => {
		setRemovingItem((prev) => (prev = true));
		setTimeout(() => {
			toggleWishlist(product);
			props.fetchData();
		}, 400);
	};
	const { image, image2, name, price, offerPrice, inStock, hasOffer } = props.product;
	return (
		<div className='card'>
			<div className='card-overlay-holder'>
				<img className='card-img' src={image} alt={name} />
				<div className='card-overlay'>
					<img src={image2} alt={name} />
				</div>
			</div>
			<div className='fav-holder'>
				<SecondHeartIcon />
			</div>

			<div
				onClick={() => removeFromWishlist(props.product)}
				className={`${removingItem ? 'removing-wishlist' : ''}  remove-wishlist text-align-center`}
			>
				<h5>{!removingItem ? 'Remove from Wishlist' : 'Removing'}</h5>
			</div>

			<div className='card-footer flex-column justify-content-center text-align-center'>
				<h5 className='product-heading'>{name}</h5>
				{hasOffer ? (
					<p>
						<span className='previous-price text-grey'>₹{price.toLocaleString()}</span>
						<span className='current-price'>₹{offerPrice.toLocaleString()}</span>
						<span className='offer-price-message'>{` (${(((price - offerPrice) / offerPrice) * 100).toFixed()}% OFF)`}</span>
					</p>
				) : (
					<p className='current-price'>₹{price.toLocaleString()}</p>
				)}
				{inStock ? (
					!isInCart ? (
						<button
							onClick={() => {
								addToCart(props.product);
							}}
							className='btn btn-secondary'
						>
							Move to Cart
						</button>
					) : (
						<div className='flex-row space-between align-items-center btn-products'>
							<button
								onClick={inCartItem?.quantity > 1 ? () => changeCartQuantity(props.product, -1) : () => removeFromCart(props.product)}
								className='btn  btn-secondary btn-quantity'
							>
								{inCartItem?.quantity > 1 ? <MinusIcon /> : <TrashIcon />}
							</button>
							<h3>{inCartItem?.quantity}</h3>
							<button
								onClick={() => changeCartQuantity(props.product, 1)}
								className='btn flex-row justify-content-center btn-secondary btn-quantity'
							>
								<PlusIcon />
							</button>
						</div>
					)
				) : (
					<button className='btn btn-products-disabled'>Out of stock!</button>
				)}
			</div>
		</div>
	);
};
