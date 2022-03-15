import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ProductsPage, Homepage, MyCartScreen, WishListPage } from './components/allComponent';
function App() {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/products' element={<ProductsPage />} />
			<Route path='/wishlist' element={<WishListPage />} />
			<Route path='/myCart' element={<MyCartScreen />} />
		</Routes>
	);
}

export default App;
