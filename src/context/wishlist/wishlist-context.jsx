import { createContext, useContext, useState, useEffect } from 'react';
import { useAxios } from '../../custom-hooks/useAxios';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
	const [wishlist, setWishlist] = useState([]);
	const { response: wishlistResponse, operation: fetchWishlist, loading: loadingWishlist } = useAxios();

	const toggleWishlist = (product) => {
		const isInWishlist = wishlist.findIndex((item) => item._id === product._id);
		isInWishlist === -1
			? fetchWishlist({
					method: 'post',
					url: '/api/user/wishlist',
					headers: {
						authorization: localStorage.getItem('token'),
					},
					data: {
						product: product,
					},
			  })
			: fetchWishlist({
					method: 'delete',
					url: `/api/user/wishlist/${product._id}`,
					headers: {
						authorization: localStorage.getItem('token'),
					},
			  });
	};

	useEffect(() => {
		wishlistResponse && setWishlist(wishlistResponse.wishlist);
	}, [wishlistResponse]);

	const emptyWishlist = () => {
		setWishlist([]);
	};

	return <WishlistContext.Provider value={{ wishlist, toggleWishlist, emptyWishlist, loadingWishlist }}>{children}</WishlistContext.Provider>;
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
