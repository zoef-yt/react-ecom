import MockmanEs from 'mockman-js';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductsPage, Homepage, MyCartScreen, WishListPage } from './components/allComponent';
import { Modal } from './components/modal/modal';
import { LoginCardModal } from './components/modal/LoginCardModal';
import { FilterProvider, useModal, WishlistProvider, MyCartProvider } from './context/index.js';
function App() {
	const { modal } = useModal();

	return (
		<MyCartProvider>
			<WishlistProvider>
				<FilterProvider>
					<Routes>
						<Route path='/' element={<Homepage />} />
						<Route path='/products' element={<ProductsPage />} />
						<Route path='/wishlist' element={<WishListPage />} />
						<Route path='/myCart' element={<MyCartScreen />} />
						<Route path='/mock-api' element={<MockmanEs />} />
					</Routes>

					<Modal showModal={modal}>
						<LoginCardModal />
					</Modal>
				</FilterProvider>
			</WishlistProvider>
		</MyCartProvider>
	);
}

export { App };
