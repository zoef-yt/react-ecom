import MockmanEs from 'mockman-js';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ProductsPage, Homepage, MyCartScreen, WishListPage } from './components/allComponent';
import { WishlistProvider } from './context/wishlist/wishlist-context';
function App() {
	return (
		<WishlistProvider>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/wishlist' element={<WishListPage />} />
				<Route path='/myCart' element={<MyCartScreen />} />
				<Route path='/mock-api' element={<MockmanEs />} />
			</Routes>
		</WishlistProvider>
	);
}

export default App;
