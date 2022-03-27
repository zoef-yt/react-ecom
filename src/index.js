import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from './server';
import { AuthProvider, ModalProvider, ProductsDataProvider, ThemeProvider } from './context/index.js';
// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ModalProvider>
					<ProductsDataProvider>
						<ThemeProvider>
							<App />
						</ThemeProvider>
					</ProductsDataProvider>
				</ModalProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
