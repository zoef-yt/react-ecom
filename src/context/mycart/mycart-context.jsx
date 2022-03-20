import { createContext, useContext, useState } from 'react';

const MyCartContext = createContext();

const MyCartProvider = ({ children }) => {
	const [myCart, setMyCart] = useState([]);

	const addToCart = (product) => {
		setMyCart((prevList) => {
			const index = prevList.findIndex((p) => p.id === product.id);
			return index === -1 ? [...prevList, { ...product, quantity: 1 }] : prevList;
		});
	};

	const changeCartQuantity = (product, quantityNumber) => {
		setMyCart((prevList) =>
			prevList.map((p) => {
				return p.id === product.id ? { ...product, quantity: p.quantity + quantityNumber } : p;
			}),
		);
	};

	const removeFromCart = (product) => {
		setMyCart((prevList) => prevList.filter((prev) => prev.id !== product.id));
	};

	return <MyCartContext.Provider value={{ myCart, addToCart, removeFromCart, changeCartQuantity }}>{children}</MyCartContext.Provider>;
};

const useMyCart = () => useContext(MyCartContext);

export { MyCartProvider, useMyCart };
