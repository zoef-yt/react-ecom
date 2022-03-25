import React from 'react';
import '../css/cart-screen.css';
import { Header, Footer, FeaturedCardGenerator } from '../allComponent';
import { useProductsData } from '../../context/data/data-context';
import { useMyCart } from '../../context/mycart/mycart-context';
import { PlusIcon, MinusIcon, TrashIcon } from '../../assets/svg/svg';
import { useWishlist } from '../../context/wishlist/wishlist-context';

const MyCartScreen = () => {
	const { featuredProducts } = useProductsData();
	const { myCart, removeFromCart, changeCartQuantity } = useMyCart();
	const { toggleWishlist, wishlist } = useWishlist();
	let pricingStructure = {
		OGPricing: myCart.reduce((acc, prd) => acc + prd.price * prd.quantity, 0),
		discountedPrice: myCart.reduce((acc, prd) => acc + (prd.price - prd.offerPrice) * prd.quantity, 0),
		deliveryPrice: myCart.reduce((acc, prd) => acc + prd.quantity * 15, 0),
	};
	return (
		<div className='cartpage-homepage'>
			<Header />
			<main className='cartpage-main-content'>
				<h1>My Cart{myCart.length >= 1 ? `(${myCart.length})` : ''}</h1>
				<div className='cartpage-content flex-row space-evenly'>
					<div className='cartpage-products'>
						{myCart && myCart.length > 0 ? (
							myCart.map((product) => {
								const isWishListed = wishlist.findIndex((item) => item.id === product.id) === -1 ? false : true;

								const { id, name, image, price, offerPrice, quantity } = product;
								return (
									<div key={id} className='card card-xl'>
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
												<div className='flex-row space-between btn-products quantity'>
													<button
														onClick={quantity > 1 ? () => changeCartQuantity(product, -1) : () => removeFromCart(product)}
														className='btn btn-secondary btn-quantity'
													>
														{quantity > 1 ? <MinusIcon /> : <TrashIcon />}
													</button>
													<h3>{quantity}</h3>
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
								<p>Price({myCart.reduce((acc, prd) => acc + prd.quantity, 0).toLocaleString()} Items)</p>
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

							<button className='btn btn-primary'>Place Order</button>
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
