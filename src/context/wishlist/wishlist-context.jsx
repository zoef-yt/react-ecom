import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { useAxios } from '../../custom-hooks/useAxios';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
	const [wishlist, setWishlist] = useState([]);
	const toggleWishlist = (product) => {
		setWishlist((prevList) => {
			const index = prevList.findIndex((p) => p._id === product._id);

			index === -1
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
			return index === -1 ? [...prevList, product] : prevList.filter((p) => p._id !== product._id);
		});
	};

	const emptyWishlist = () => {
		setWishlist([]);
	};

	const { operation: fetchWishlist } = useAxios();

	useEffect(() => {
		fetchWishlist({
			method: 'get',
			url: '/api/user/wishlist',
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
	}, []);

	return <WishlistContext.Provider value={{ wishlist, toggleWishlist, emptyWishlist }}>{children}</WishlistContext.Provider>;
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
