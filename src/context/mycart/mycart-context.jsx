import { createContext, useContext, useState, useEffect } from 'react';
import { useAxios } from '../../custom-hooks/useAxios';

const MyCartContext = createContext();

const MyCartProvider = ({ children }) => {
	const [myCart, setMyCart] = useState([]);

	const { response: cartResponse, operation: fetchCart, loading: loadingCart } = useAxios();
	const addToCart = (product) => {
		myCart.findIndex((item) => item._id === product._id) === -1 &&
			fetchCart({
				method: 'post',
				url: '/api/user/cart',
				headers: {
					authorization: localStorage.getItem('token'),
				},
				data: {
					product: product,
				},
			});
		//! COMMENTED OUT TO TEST
		// setMyCart((prevList) => {
		// 	const index = prevList.findIndex((p) => p._id === product._id);
		// 	return index === -1 ? [...prevList, { ...product, qty: 1 }] : prevList;
		// });
	};

	const changeCartQuantity = (product, quantityNumber) => {
		fetchCart({
			method: 'post',
			url: `/api/user/cart/${product._id}`,
			headers: {
				authorization: localStorage.getItem('token'),
			},
			data: {
				action: {
					type: quantityNumber > 0 ? 'increment' : 'decrement',
				},
			},
		});

		//! COMMENTED OUT TO TEST
		// setMyCart((prevList) =>
		// 	prevList.map((p) => {
		// 		return p._id === product._id ? { ...product, qty: p.qty + quantityNumber } : p;
		// 	}),
		// );
	};

	const removeFromCart = (product) => {
		fetchCart({
			method: 'delete',
			url: `/api/user/cart/${product._id}`,
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
		//! COMMENTED OUT TO TEST
		// setMyCart((prevList) => prevList.filter((prev) => prev._id !== product._id));
	};

	const emptyCart = () => {
		fetchCart({
			method: 'delete',
			url: '/api/user/cart',
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
		setMyCart([]);
	};

	useEffect(() => {
		cartResponse && setMyCart(cartResponse.cart);
	}, [cartResponse]);

	return <MyCartContext.Provider value={{ myCart, addToCart, removeFromCart, changeCartQuantity, emptyCart }}>{children}</MyCartContext.Provider>;
};

const useMyCart = () => useContext(MyCartContext);

export { MyCartProvider, useMyCart };
