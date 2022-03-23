import MockmanEs from 'mockman-js';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductsPage, Homepage, MyCartScreen, WishListPage } from './components/allComponent';
import { MyCartProvider } from './context/mycart/mycart-context';
import { WishlistProvider } from './context/wishlist/wishlist-context';
import { Modal } from './components/modal/modal';
import { LoginCardModal } from './components/modal/LoginCardModal';
import { useModal } from './context/modal/modal-context';

function App() {
	const { modal } = useModal();

	return (
		<MyCartProvider>
			<WishlistProvider>
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
			</WishlistProvider>
		</MyCartProvider>
	);
}

export { App };
