import { createContext, useContext, useState } from 'react';

const ordersContext = createContext();

const OrdersProvider = ({ children }) => {
	const [orders, setOrders] = useState([]);

	const addToOrders = (product) => {
		setOrders((prevOrders) => [...prevOrders, product]);
	};
	const clearOrders = () => {
		setOrders([]);
	};

	return <ordersContext.Provider value={{ orders, addToOrders, clearOrders }}>{children}</ordersContext.Provider>;
};

const useOrders = () => useContext(ordersContext);

export { OrdersProvider, useOrders };
