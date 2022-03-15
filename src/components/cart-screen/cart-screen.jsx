import React from 'react';
import '../css/cart-screen.css';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

const MyCartScreen = () => {
	return (
		<div className='cartpage-homepage'>
			<Header />
			<main className='cartpage-main-content'>
				<h1>My Cart(1)</h1>
				<div className='cartpage-content flex-row space-evenly'>
					<div className='cartpage-products'>
						{[...Array(5)].map((item, index) => (
							<div key={index} className='card card-xl'>
								<div className='flex-row'>
									<img className='cartpage-product-img img' src='../../assets/images/games/HFW-1.png' alt='something' />
									<div className='flex-column space-around product-cart-detail'>
										<h5>Horizon Forbidden West</h5>
										<p>Price: $54</p>
										<div className='quantity'>
											<p>Quantity</p>

											<button className='btn btn-outline-secondary'>-</button>
											<p className=''>1</p>
											<button className='btn btn-outline-secondary'>+</button>
										</div>
										<button className='btn btn-danger'>Remove Item</button>
										<button className='btn btn-outline-secondary'>Move to Wishlist</button>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className='card space-evenly checkout-card'>
						<h3>Price Details</h3>
						<hr />
						<div className='flex-row space-between'>
							<p>Price(4 Items)</p>
							<p>$216</p>
						</div>
						<div className='flex-row space-between'>
							<p>Discount</p>
							<p>-$16</p>
						</div>
						<div className='flex-row space-between'>
							<p>Delivery</p>
							<p>$10</p>
						</div>
						<hr />
						<div className='flex-row space-between'>
							<h4>Total Amount</h4>
							<h4>$206</h4>
						</div>
						<button className='btn btn-primary'>Place Order</button>
						<p className='text-grey'>You will save $6 on this purchase*</p>
					</div>
				</div>
			</main>
			<aside className='cartpage-suggestion-section'>
				<section className='suggestions-section'>
					<h1 className='text-align-center'>Suggestions</h1>
					<div className='suggestions-row'>
						{[...Array(14)].map((item, index) => (
							<div key={index} className='card card-md'>
								<div className='card-body card-overlay-holder'>
									<img className='card-img' src='/assets/images/games/MIlesMorales-1.png' alt='..' />
									<div className='card-overlay'>
										<p>Releasing:TBH</p>
										<p>Available: PS5 & PS4</p>
									</div>
								</div>

								<div className='card-badge'>
									<p>Pre Order Now!</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</aside>
			<Footer />
		</div>
	);
};

export { MyCartScreen };
