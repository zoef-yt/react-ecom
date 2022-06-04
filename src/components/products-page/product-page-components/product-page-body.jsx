import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useProductsData, useFilter } from '../../../context/index.js';
import { SingleProductCard } from '../../allComponent.jsx';

const ProductsPageBody = () => {
	// This will make page scroll at the top every time when you change the route this page
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	// Getting data from context
	const { products } = useProductsData();
	const { FilterState, FilterDispatch } = useFilter();
	useEffect(() => {
		FilterState.dataToShow.length === 0 &&
			FilterDispatch({
				type: 'SET_DATA',
				payload: products.data,
			});
	}, [products]);
	const filteredProducts = (filterState) => {
		const inStockCheckedProduct = includesOutOfStockFilter(filterState.includesOutOfStock, filterState.dataToShow);
		const priceRangedProduct = priceRangeFilter(filterState.priceRange, inStockCheckedProduct);
		const typesOfProduct = typesOfProductFilter(filterState.types, priceRangedProduct);
		const RatingProduct = ratingFilter(filterState.rating, typesOfProduct);
		const SearchedProduct = searchFilter(filterState.search, RatingProduct);
		return SearchedProduct;
	};

	const priceRangeFilter = (price, data) => (price != null ? data.filter((product) => product.offerPrice <= price) : data);

	const includesOutOfStockFilter = (isOutOfStock, data) => (!isOutOfStock ? data.filter((product) => product.inStock) : data);

	const typesOfProductFilter = (type, data) =>
		type != null ? data.filter((products) => products.categoryName.toLowerCase().includes(type.toLowerCase())) : data;

	const ratingFilter = (rating, data) => (rating != null ? data.filter((product) => product.ratings >= rating) : data);

	const searchFilter = (search, data) =>
		search != null && search != ''
			? data.filter(
					(product) =>
						product.name.toLowerCase().includes(search.toLowerCase()) ||
						product.categoryName.toLowerCase().includes(search.toLowerCase()) ||
						product.brand.toLowerCase().includes(search.toLowerCase()),
			  )
			: data;
	return (
		<>
			{/* product loading logic */}
			{products.loading ? (
				<div>LOADING AWESOMENESS.........</div>
			) : filteredProducts(FilterState).length > 0 ? (
				<main className='product-main'>
					{filteredProducts(FilterState).map((product) => {
						const { _id, image, image2, name, price, offerPrice, offerMessage, inStock, hasOffer, ratings } = product;
						return _id == null ? (
							// if products are empty then this div will show
							<div key={'1'}>
								<p>{name}</p>
								<p className='text-grey'>{offerMessage}</p>
							</div>
						) : (
							//! Final products is show here
							<SingleProductCard
								key={_id}
								_id={_id}
								image={image}
								image2={image2}
								name={name}
								price={price}
								offer={offerMessage}
								offerPrice={offerPrice}
								hasOffer={hasOffer}
								inStock={inStock}
								rating={ratings}
							/>
						);
					})}
				</main>
			) : (
				<div className=' flex-row justify-content-center'>
					<h1>No products found</h1>
				</div>
			)}
		</>
	);
};

export { ProductsPageBody };
