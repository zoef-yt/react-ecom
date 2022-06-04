import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MinusIcon, PlusIcon, SecondHeartIcon, TrashIcon } from '../../assets/svg/svg';
import { useAuth, useModal, useMyCart, useProductsData, useWishlist } from '../../context';
import { useTitle } from '../../custom-hooks/useTitle';
import { FeaturedCardGenerator, Footer, Header } from '../allComponent';
import './SingleProductPage.css';

export const SingleProductPage = () => {
	const [currentProduct, setCurrentProduct] = useState({
		_id: '',
		id: '',
		name: '',
		image: '',
		image2: '',
		categoryName: '',
		brand: '',
		ratings: '',
		price: '',
		hasOffer: '',
		offerPrice: '',
		offerMessage: '',
		preOrder: '',
		inStock: '',
	});
	const { user } = useAuth();
	const { openModal } = useModal();

	const { products } = useProductsData();
	const { toggleWishlist, wishlist } = useWishlist();
	const { productId } = useParams();
	const { myCart, addToCart, removeFromCart, changeCartQuantity } = useMyCart();

	const isInCart = myCart.findIndex((p) => p._id === currentProduct?._id) === -1 ? false : true;
	const inCartItem = myCart.find((p) => p._id === currentProduct?._id);

	const isWishListed = wishlist.findIndex((product) => product._id === currentProduct?._id) === -1 ? false : true;

	const navigate = useNavigate();

	useTitle(currentProduct?.name);
	useEffect(() => {
		setCurrentProduct(products.data.find((product) => product._id === productId));
	}, [productId, products]);

	return (
		<div className='single-product-page'>
			<Header />
			<main className='main-content'>
				<div className='product-listing-container'>
					<div className='image-holder'>
						<img src={currentProduct?.image} alt={currentProduct?.name} />
					</div>
					<div className='product-details'>
						<h5 className='product-heading' title={currentProduct?.name}>
							{currentProduct?.name}
							<div
								onClick={(e) => {
									e.stopPropagation();
									user ? toggleWishlist(currentProduct) : openModal('AuthModal');
								}}
								className={isWishListed ? 'fav-icon-selected' : 'fav-icon'}
							>
								<SecondHeartIcon />
							</div>
						</h5>
						{currentProduct?.inStock ? (
							<>
								{currentProduct?.hasOffer ? (
									<p>
										<span className='previous-price text-grey'>₹{currentProduct?.price.toLocaleString()}</span>
										<span className='current-price'>₹{currentProduct?.offerPrice.toLocaleString()}</span>
										<span className='offer-price-message'>{` (${(
											((currentProduct?.price - currentProduct?.offerPrice) / currentProduct?.price) *
											100
										).toFixed()}% OFF)`}</span>
									</p>
								) : (
									<p className='current-price'>₹{currentProduct?.price.toLocaleString()}</p>
								)}
								{isInCart ? (
									<button
										onClick={(e) => {
											e.stopPropagation();
											user ? navigate('/myCart') : openModal('AuthModal');
										}}
										className='btn btn-products flex-row justify-content-center btn-primary'
									>
										Go to Cart
									</button>
								) : (
									<button
										onClick={(e) => {
											e.stopPropagation();
											user ? (addToCart(currentProduct), navigate('/myCart')) : openModal('AuthModal');
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
												inCartItem.qty > 1 ? changeCartQuantity(currentProduct, -1) : removeFromCart(currentProduct);
											}}
											className='btn  btn-secondary btn-quantity'
										>
											{inCartItem.qty > 1 ? <MinusIcon /> : <TrashIcon />}
										</button>
										<h3>{inCartItem.qty}</h3>
										<button
											onClick={(e) => {
												e.stopPropagation();
												changeCartQuantity(currentProduct, 1);
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
												user ? addToCart(currentProduct) : openModal('AuthModal');
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
				</div>
			</main>
			<Suggestion />
			<Footer />
		</div>
	);
};

const Suggestion = () => {
	const { featuredProducts } = useProductsData();

	return (
		<aside className='suggestion-section'>
			<section className='suggestions-section'>
				<h1 className='text-align-center'>Suggestions</h1>
				<div style={{ gridTemplateColumns: featuredProducts && `repeat(${featuredProducts.data.length}, 1fr)` }} className='features-row'>
					<FeaturedCardGenerator />
				</div>
			</section>
		</aside>
	);
};
