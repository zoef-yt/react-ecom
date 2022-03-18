import React from 'react';
import { SecondHeartIcon } from '../../../assets/svg/svg';
import { useWishlist } from '../../../context/wishlist/wishlist-context';

const SingleProductCard = (props) => {
	const { toggleWishlist, wishlist } = useWishlist();
	const isWishListed = wishlist.findIndex((product) => product.id === props.id) === -1 ? false : true;
	return (
		<div className='card'>
			<div className='card-overlay-holder'>
				<img className='card-img' src={props.image} alt={props.name} />
				<div className='card-overlay'>
					<img src={props.image2} alt={props.name + '2'} />
				</div>
			</div>
			<div onClick={() => toggleWishlist(props)} className={isWishListed ? 'fav-holder-selected' : 'fav-holder'}>
				<SecondHeartIcon />
			</div>

			<div onClick={() => props.onClick()} className='card-footer flex-column justify-content-center align-items-center'>
				<h5 className='product-heading'>{props.name}</h5>
				{props.inStock ? (
					<>
						{props.hasOffer ? (
							<p>
								<span className='previous-price text-grey'>₹{props.price.toLocaleString()}</span>
								<span className='current-price'>₹{props.offerPrice.toLocaleString()}</span>
								<span className='offer-price-message'>{` (${(
									((props.price - props.offerPrice) / props.offerPrice) *
									100
								).toFixed()}% OFF)`}</span>
							</p>
						) : (
							<p className='current-price'>₹{props.price.toLocaleString()}</p>
						)}
						<button className='btn btn-products btn-primary'>Buy Now!</button>
						<button className='btn btn-products btn-secondary'>Add to Cart</button>
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
