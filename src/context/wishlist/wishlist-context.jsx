import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { useAxios } from '../../custom-hooks/useAxios';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
	const [wishlist, setWishlist] = useState([]);
	const [currentProd, setCurrentProd] = useState(null);
	const toggleWishlist = (product) => {
		setCurrentProd(product);

		setWishlist((prevList) => {
			const index = prevList.findIndex((p) => p.id === product.id);
			return index === -1 ? [...prevList, product] : prevList.filter((p) => p.id !== product.id);
		});
	};

	const emptyWishlist = () => {
		setWishlist([]);
	};

	const { response: responseWishlist, error: errorWishlist, loading: loadingWishlist, operation: fetchWishlist } = useAxios();

	useEffect(() => {
		console.log(currentProd);
		fetchWishlist({
			method: 'post',
			url: '/api/user/wishlist',
			headers: {
				authorization: localStorage.getItem('token'),
			},
			body: {
				product: currentProd,
			},
		});
		setCurrentProd(null);
		console.log('fetchWishlist');
		console.log(responseWishlist, loadingWishlist, errorWishlist);
	}, [wishlist]);

	return <WishlistContext.Provider value={{ wishlist, toggleWishlist, emptyWishlist }}>{children}</WishlistContext.Provider>;
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
