import { createContext, useContext, useState } from 'react';

const MyCartContext = createContext();

const MyCartProvider = ({ children }) => {
	const [myCart, setMyCart] = useState([]);

	const addToCart = (product) => {
		setMyCart((prevList) => {
			const index = prevList.findIndex((p) => p._id === product._id);
			return index === -1 ? [...prevList, { ...product, quantity: 1 }] : prevList;
		});
	};

	const changeCartQuantity = (product, quantityNumber) => {
		setMyCart((prevList) =>
			prevList.map((p) => {
				return p._id === product._id ? { ...product, quantity: p.quantity + quantityNumber } : p;
			}),
		);
	};

	const removeFromCart = (product) => {
		setMyCart((prevList) => prevList.filter((prev) => prev._id !== product._id));
	};

	const emptyCart = () => {
		setMyCart([]);
	};

	return <MyCartContext.Provider value={{ myCart, addToCart, removeFromCart, changeCartQuantity, emptyCart }}>{children}</MyCartContext.Provider>;
};

const useMyCart = () => useContext(MyCartContext);

export { MyCartProvider, useMyCart };
