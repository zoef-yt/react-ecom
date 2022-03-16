import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const ProductsDataContext = createContext();

const ProductsDataProvider = ({ children }) => {
	const [products, setProducts] = useState({ loading: true, data: [] });
	const [featuredProducts, setFeaturedProducts] = useState({ loading: true, data: [] });
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setProducts((prev) => ({ ...prev, loading: true }));
			setFeaturedProducts((prev) => ({ ...prev, loading: true }));
			const response = await axios.get('/api/products');
			const data = [...response.data.products];
			setProducts((prev) => ({ ...prev, data: data, loading: false }));
			const featured = [...data].filter((product, index) => (index < 10 ? (Math.random() >= 0.4 ? product : null) : product));
			setFeaturedProducts((prev) => ({ ...prev, data: featured, loading: false }));
		} catch (err) {
			setProducts((prev) => ({
				...prev,
				data: [{ name: 'There is something wrong with the server, Sorry for the inconvenience', offerMessage: err.message }],
				loading: false,
			}));
			setFeaturedProducts((prev) => ({
				...prev,
				data: [{ name: 'There is something wrong with the server, Sorry for the inconvenience', offerMessage: err.message }],
				loading: false,
			}));
		}
	};

	return <ProductsDataContext.Provider value={{ products: products, featuredProducts: featuredProducts }}>{children}</ProductsDataContext.Provider>;
};

const useProductsData = () => useContext(ProductsDataContext);

export { ProductsDataProvider, useProductsData };
