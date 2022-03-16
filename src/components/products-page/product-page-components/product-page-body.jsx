import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SingleProductCard } from './single-product-card';

const ProductsPageBody = () => {
	const [products, setProducts] = useState({ loading: true, data: [] });
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setProducts((prev) => ({ ...prev, loading: true }));
			const response = await axios.get('/api/products');
			setProducts((prev) => ({ ...prev, data: [...response.data.products], loading: false }));
		} catch (err) {
			setProducts((prev) => ({
				...prev,
				data: [{ name: 'There is something wrong with the server, Sorry for the inconvenience', offerMessage: err.message }],
				loading: false,
			}));
		}
	};

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
