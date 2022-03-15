import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ProductsPage, Homepage } from './components/allComponent';
function App() {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/products' element={<ProductsPage />} />
		</Routes>
	);
}

export default App;
