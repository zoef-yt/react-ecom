import MockmanEs from 'mockman-js';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductsPage, Homepage, MyCartScreen, WishListPage, OrdersPage } from './components/allComponent';
import { ModalComponent } from './components/modal/modal.jsx';
import { FilterProvider, useModal, WishlistProvider, MyCartProvider } from './context/index.js';
import { SingleProductPage } from './components/SingleProductPage/SingleProductPage';
function App() {
	const { isModalOpened, openModal, closeModal, modalChildComponent } = useModal();

	return (
		<MyCartProvider>
			<WishlistProvider>
				<FilterProvider>
					<Routes>
						<Route path='/' element={<Homepage />} />
						<Route path='/products' element={<ProductsPage />} />
						<Route path='/products/:productId' element={<SingleProductPage />} />
						<Route path='/wishlist' element={<WishListPage />} />
						<Route path='/myCart' element={<MyCartScreen />} />
						<Route path='/mock-api' element={<MockmanEs />} />
						<Route path='/orders' element={<OrdersPage />} />
					</Routes>
					<ModalComponent isModalOpened={isModalOpened} modalChildComponent={modalChildComponent} closeModal={closeModal} />
				</FilterProvider>
			</WishlistProvider>
		</MyCartProvider>
	);
}

export { App };
