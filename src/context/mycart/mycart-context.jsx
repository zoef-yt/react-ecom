import { createContext, useContext, useState, useEffect } from 'react';
import { useAxios } from '../../custom-hooks/useAxios';

const MyCartContext = createContext();

const MyCartProvider = ({ children }) => {
	const [myCart, setMyCart] = useState([]);

	const { response: cartResponse, operation: fetchCart } = useAxios();
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
	};

	const removeFromCart = (product) => {
		fetchCart({
			method: 'delete',
			url: `/api/user/cart/${product._id}`,
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
	};

	const emptyCart = () => {
		for (const product of myCart) {
			console.log(product);
			removeFromCart(product);
		}
		setMyCart([]);
	};

	useEffect(() => {
		cartResponse && setMyCart(cartResponse.cart);
	}, [cartResponse]);

	return <MyCartContext.Provider value={{ myCart, addToCart, removeFromCart, changeCartQuantity, emptyCart }}>{children}</MyCartContext.Provider>;
};

const useMyCart = () => useContext(MyCartContext);

export { MyCartProvider, useMyCart };
