import React from 'react';
import '../css/wishlist.css';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

const WishListPage = () => {
	return (
		<div className='wishlist-homepage'>
			<Header />

			<main>
				<h1 className='text-align-center'> My Wishlist</h1>
				<div className='product-main wishlist-page'>
					<div className='card'>
						<div className='card-overlay-holder'>
							<img className='card-img' src='../../assets/images/games/GOT-1.png' alt='img1' />
							<div className='card-overlay'>
								<img src='../../assets/images/games/GOT-2.png' alt='img2' />
							</div>
						</div>
						<div className='fav-holder'>
							<svg
								aria-hidden='true'
								role='img'
								className='iconify iconify--ph'
								width='32'
								height='32'
								preserveAspectRatio='xMidYMid meet'
								viewBox='0 0 256 256'
							>
								<path
									d='M128 216S28 160 28 92a52 52 0 0 1 100-20a52 52 0 0 1 100 20c0 68-100 124-100 124z'
									opacity='.1'
									fill='currentColor'
								></path>
								<path
									d='M128 224a7.8 7.8 0 0 1-3.9-1C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a7.8 7.8 0 0 1-3.9 1zm-3.9-15zM80 48a44 44 0 0 0-44 44c0 55.2 74 103.7 92 114.7c18-11 92-59.5 92-114.7a44 44 0 0 0-84.6-17a8 8 0 0 1-14.8 0A43.8 43.8 0 0 0 80 48z'
									fill='currentColor'
								></path>
							</svg>
						</div>

						<div className='remove-wishlist text-align-center'>
							<h5>Remove from Wishlist</h5>
						</div>

						<div className='card-footer flex-column justify-content-center text-align-center'>
							<h5 className='product-heading'>Ghost Of Tsushima</h5>
							<p>$20.00</p>
							<button className='btn btn-secondary'>Move to Cart</button>
						</div>
					</div>
				</div>
			</main>

			<aside className='wishlist-suggestion-section'>
				<section className='suggestions-section'>
					<h1 className='text-align-center'>Suggestions</h1>
					<div className='suggestions-row'>
						<div className='card card-md'>
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
					</div>
				</section>
			</aside>

			<Footer />
		</div>
	);
};

export { WishListPage };
