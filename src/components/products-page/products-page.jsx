import React from 'react';
import '../css/products-page.css';
import { Header, Footer, FilterBar, ProductsPageBody } from '../allComponent.jsx';
import { useTitle } from '../../custom-hooks/useTitle';

const ProductsPage = () => {
	useTitle('Products');
	return (
		<div className='product-homepage'>
			<Header />
			<FilterBar />
			<ProductsPageBody />
			<Footer />
		</div>
	);
};

export { ProductsPage };
