import React from 'react';
import '../css/products-page.css';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { FilterBar } from './product-page-components/filter-bar';
import { ProductsPageBody } from './product-page-components/product-page-body';

const ProductsPage = () => {
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
