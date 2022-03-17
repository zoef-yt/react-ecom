import { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
	const [wishlist, setWishlist] = useState([]);

	const toggleWishlist = (product) => {
		setWishlist((prevList) => {
			const index = prevList.findIndex((p) => p.id === product.id);
			return index === -1 ? [...prevList, product] : prevList.filter((p) => p.id !== product.id);
		});
	};

	return <WishlistContext.Provider value={{ toggleWishlist, wishlist }}>{children}</WishlistContext.Provider>;
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
