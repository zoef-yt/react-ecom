import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useProductsData } from '../../../context/data/data-context';
import { SingleProductCard } from './single-product-card';

const ProductsPageBody = () => {
	// Getting data from context
	const { products } = useProductsData();
	return (
		<main className='product-main'>
			{products.loading ? (
				<div>LOADING AWESOMENESS.........</div>
			) : (
				products.data.map((product) => {
					const { id, image, image2, name, price, offerMessage, inStock } = product;
					return id == null ? (
						<div key={'1'}>
							<p>{name}</p>
							<p className='text-grey'>{offerMessage}</p>
						</div>
					) : (
						<SingleProductCard key={id} image={image} image2={image2} name={name} price={price} offer={offerMessage} inStock={inStock} />
					);
				})
			)}
		</main>
	);
};

export { ProductsPageBody };
