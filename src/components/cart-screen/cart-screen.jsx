import React from 'react';
import { ShoppingCartIcon, HeartIcon, SunIcon, HalfMoonIcon } from '../../assets/svg/svg';

const MyCartScreen = () => {
	return (
		<body class='cartpage-homepage'>
			<nav class='homepage-navbar'>
				<div class='navbar-brand'>
					<a href='/index.html'>
						<h1>Need Games</h1>
					</a>
				</div>
				<input type='search' class='text-field' placeholder='Search For Games' />
				<div class='navbar-cta'>
					<div class='badge-holder flex-column'>
						<ShoppingCartIcon className='cart-icon' />
						<div class='badge-icon'>1</div>
					</div>

					<div class='badge-holder flex-column'>
						<HeartIcon className='wishlist-icon' />
						<div class='badge-icon'>9</div>
					</div>

					<img class='theme-changer theme-changer-icon' src='/assets/svg/sun.svg' alt='dark theme' />

					<div class='badge-holder'>
						<img
							class='avatar avatar-sm'
							src='https://media-exp1.licdn.com/dms/image/C4E03AQEm0ZBjaIr1hg/profile-displayphoto-shrink_200_200/0/1610261504692?e=1649894400&v=beta&t=kKO77EwqflEDsrZf5eG7xC7ZUB4hD_BkZuRJyFiFHbI'
						/>
						<div class='profile-modal'>
							<li>My Profile</li>
							<hr />
							<li class='cart-icon'>My Cart</li>
							<hr />
							<li class='wishlist-icon'>My Wishlist</li>
							<hr />
							<li>Logout 😞</li>
						</div>
					</div>
				</div>
			</nav>
			<main class='cartpage-main-content'>
				<h1>My Cart(1)</h1>
				<div class='cartpage-content flex-row space-evenly'>
					<div class='cartpage-products'>
						<div class='card card-xl'>
							<div class='flex-row'>
								<img class='cartpage-product-img img' src='../../assets/images/games/HFW-1.png' />
								<div class='flex-column space-around product-cart-detail'>
									<h5>Horizon Forbidden West</h5>
									<p>Price: $54</p>
									<div class='quantity'>
										<p>Quantity</p>

										<button class='btn btn-outline-secondary'>-</button>
										<p class=''>1</p>
										<button class='btn btn-outline-secondary'>+</button>
									</div>
									<button class='btn btn-danger'>Remove Item</button>
									<button class='btn btn-outline-secondary'>Move to Wishlist</button>
								</div>
							</div>
						</div>
					</div>
					<div class='card space-evenly checkout-card'>
						<h3>Price Details</h3>
						<hr />
						<div class='flex-row space-between'>
							<p>Price(4 Items)</p>
							<p>$216</p>
						</div>
						<div class='flex-row space-between'>
							<p>Discount</p>
							<p>-$16</p>
						</div>
						<div class='flex-row space-between'>
							<p>Delivery</p>
							<p>$10</p>
						</div>
						<hr />
						<div class='flex-row space-between'>
							<h4>Total Amount</h4>
							<h4>$206</h4>
						</div>
						<button class='btn btn-primary'>Place Order</button>
						<p class='text-grey'>You will save $6 on this purchase*</p>
					</div>
				</div>
			</main>
			<aside class='cartpage-suggestion-section'>
				<section class='suggestions-section'>
					<h1 class='text-align-center'>Suggestions</h1>
					<div class='suggestions-row'>
						<div class='card card-md'>
							<div class='card-body card-overlay-holder'>
								<img class='card-img' src='/assets/images/games/MIlesMorales-1.png' alt='..' />
								<div class='card-overlay'>
									<p>Releasing:TBH</p>
									<p>Available: PS5 & PS4</p>
								</div>
							</div>

							<div class='card-badge'>
								<p>Pre Order Now!</p>
							</div>
						</div>
					</div>
				</section>
			</aside>
			<footer class='homepage-footer'>
				<p>Made with &hearts; by zoef shaikh</p>
			</footer>

			<script src='/app.js'></script>
		</body>
	);
};

export { MyCartScreen };
