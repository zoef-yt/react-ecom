import React from 'react';
import { ProductsData } from '../../../data/products-data';
import { SingleProductCard } from './single-product-card';

const ProductsPageBody = () => {
	return (
		<main className='product-main'>
			{ProductsData.map((product) => {
				return (
					<SingleProductCard
						key={product.id}
						image={product.image}
						image2={product.image2}
						name={product.name}
						price={product.price}
						offer={product.offer}
						inStock={product.inStock}
					/>
				);
			})}
		</main>
	);
};

export { ProductsPageBody };
