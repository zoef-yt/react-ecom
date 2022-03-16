import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/theme/theme-context';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from './server';
import { ProductsDataProvider } from './context/data/data-context';

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ProductsDataProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ProductsDataProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
