import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useProductsData } from '../../../context/data/data-context';
import { SingleProductCard } from './single-product-card';

const ProductsPageBody = () => {
	// Getting data from context
	const { products } = useProductsData();
	return (
		<main className='product-main'>
			{/* product loading logic */}
			{products.loading ? (
				<div>LOADING AWESOMENESS.........</div>
			) : (
				products.data.map((product) => {
					const { _id, image, image2, name, price, offerPrice, offerMessage, inStock, hasOffer } = product;
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
							id={_id}
							image={image}
							image2={image2}
							name={name}
							price={price}
							offer={offerMessage}
							offerPrice={offerPrice}
							hasOffer={hasOffer}
							inStock={inStock}
							onClick={() => {
								// console.log is for testing purposes for future implementation of
								console.log('This product is : ', _id);
							}}
						/>
					);
				})
			)}
		</main>
	);
};

export { ProductsPageBody };
