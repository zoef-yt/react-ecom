import React, { useEffect, useState } from 'react';
import '../css/cart-screen.css';
import { Header, Footer, FeaturedCardGenerator } from '../allComponent';
import { PlusIcon, MinusIcon, TrashIcon } from '../../assets/svg/svg';
import { useWishlist, useMyCart, useProductsData, useAuth, useOrders } from '../../context/index.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTitle } from '../../custom-hooks/useTitle';

const MyCartScreen = () => {
	const { featuredProducts } = useProductsData();
	const { user } = useAuth();
	const { myCart, removeFromCart, changeCartQuantity } = useMyCart();
	const { toggleWishlist, wishlist } = useWishlist();
	const pricingStructure = {
		OGPricing: myCart.reduce((acc, prd) => acc + prd.price * prd.qty, 0),
		discountedPrice: myCart.reduce((acc, prd) => acc + (prd.price - prd.offerPrice) * prd.qty, 0),
		deliveryPrice: myCart.reduce((acc, prd) => acc + prd.qty * 15, 0),
	};
	// This will make page scroll at the top every time when you change the route this page
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	// useTitle('My Cart');
	const [isCheckingOut, setIsCheckingOut] = useState(false);

	isCheckingOut ? useTitle('Checkout') : useTitle('My Cart');

	return (
		<div className='cartpage-homepage'>
			<Header />
			<main className='cartpage-main-content'>
				<h1>My Cart{myCart.length >= 1 ? `(${myCart.length})` : ''}</h1>
				<div className='cartpage-content flex-row space-evenly'>
					<div className='cartpage-products'>
						{isCheckingOut ? (
							<>
								<div className='card card-xl space-around'>
									<h1 className='text-align-center'> Address</h1>
									<h3>Name: {user.name}</h3>
									<h3>Address: No.1, Street, City, State, Country</h3>
									<h3>Phone: 1234567890</h3>
								</div>
							</>
						) : myCart && myCart.length > 0 ? (
							myCart.map((product) => {
								const isWishListed = wishlist.findIndex((item) => item._id === product._id) === -1 ? false : true;

								const { _id, name, image, price, offerPrice, qty } = product;
								return (
									<div key={_id} className='card card-xl'>
										<div className='flex-row'>
											<img className='cartpage-product-img img' src={image} alt={name} />
											<div className='flex-column space-around product-cart-detail'>
												<h5>{name}</h5>
												<p>
													<span className='previous-price text-grey'>₹{price.toLocaleString()}</span>
													<span className='current-price'>₹{offerPrice.toLocaleString()}</span>
													<span className='offer-price-message'>{` (${(
														((price - offerPrice) / price) *
														100
													).toFixed()}% OFF)`}</span>
												</p>
												<div className='flex-row space-between btn-products-qty'>
													<button
														onClick={qty > 1 ? () => changeCartQuantity(product, -1) : () => removeFromCart(product)}
														className='btn btn-secondary btn-quantity'
													>
														{qty > 1 ? <MinusIcon /> : <TrashIcon />}
													</button>
													<h3>{qty}</h3>
													<button
														onClick={() => changeCartQuantity(product, 1)}
														className='btn flex-row justify-content-center btn-secondary btn-quantity'
													>
														<PlusIcon />
													</button>
												</div>
												<button onClick={() => removeFromCart(product)} className='btn btn-danger'>
													Remove Item
												</button>
												{isWishListed ? (
													<button className='btn btn-products-disabled '>Already in wishlist</button>
												) : (
													<button
														onClick={() => {
															toggleWishlist(product);
														}}
														className='btn btn-outline-secondary'
													>
														Save to Wishlist
													</button>
												)}
											</div>
										</div>
									</div>
								);
							})
						) : (
							<>
								<h3 className='text-align-center'>Your Cart is Empty</h3>
							</>
						)}
					</div>

					{myCart.length > 0 ? (
						<div className='card space-evenly checkout-card'>
							<h3>Price Details</h3>
							<hr />
							<div className='flex-row space-between'>
								<p>Price({myCart.reduce((acc, prd) => acc + prd.qty, 0).toLocaleString()} Items)</p>
								<p>₹{pricingStructure.OGPricing.toLocaleString()}</p>
							</div>
							<div className='flex-row space-between'>
								<p>Discount</p>
								<p>-₹{pricingStructure.discountedPrice.toLocaleString()}</p>
							</div>
							<div className='flex-row space-between'>
								<p>Delivery</p>
								<p>₹{pricingStructure.deliveryPrice}</p>
							</div>
							<hr />
							<div className='flex-row space-between'>
								<h4>Total Amount</h4>
								<h4>
									₹
									{(
										pricingStructure.OGPricing +
										pricingStructure.deliveryPrice -
										pricingStructure.discountedPrice
									).toLocaleString()}
								</h4>
							</div>
							{isCheckingOut ? (
								<>
									<PlaceOrderButton
										totalPrice={pricingStructure.OGPricing + pricingStructure.deliveryPrice - pricingStructure.discountedPrice}
									/>
									<button
										onClick={() => {
											setIsCheckingOut(false);
										}}
										className='btn btn-outline-danger'
									>
										Cancel
									</button>
								</>
							) : (
								<button
									onClick={() => {
										setIsCheckingOut(true);
									}}
									className='btn btn-primary'
								>
									Place Order
								</button>
							)}
						</div>
					) : (
						<></>
					)}
				</div>
			</main>

			<aside className='cartpage-suggestion-section'>
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

export { MyCartScreen };
const PlaceOrderButton = ({ totalPrice }) => {
	const { addToOrders } = useOrders();
	const { myCart, emptyCart } = useMyCart();
	const { user } = useAuth();
	const navigate = useNavigate();
	const loadScript = (src) => {
		return new Promise((resolve) => {
			const script = document.createElement('script');
			script.src = src;
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	};

	const paymentHandler = async (totalAmount) => {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?');
			return;
		}
		const options = {
			key: process.env.REACT_APP_RAZOR_KEY_ID,
			currency: 'INR',
			amount: totalAmount * 100,
			name: 'Need Games',
			description: 'Thank you for shopping with Need Games',
			handler: async function (response) {
				if (!!response.razorpay_payment_id) {
					addToOrders({ myCart, paymentId: response.razorpay_payment_id, totalAmount: totalAmount });
					emptyCart();
					navigate('/orders');
				}
			},
			prefill: {
				name: user.name ?? 'New user',
				email: user.email ?? 'example@gmail.com',
				contact: '1234567899',
			},
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};

	return (
		<button
			onClick={async () => {
				const result = await paymentHandler(totalPrice);
			}}
			className='btn btn-primary'
		>
			Checkout
		</button>
	);
};
