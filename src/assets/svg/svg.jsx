import React from 'react';

function ShoppingCartIcon(props) {
	return (
		<svg width='1.13em' height='1em' viewBox='0 0 576 512' {...props}>
			<path
				fill='currentColor'
				d='M96 0c11.5 0 21.4 8.19 23.6 19.51L121.1 32h420.7c20.3 0 36.5 20.25 30.8 40.66l-54 192.04c-3.9 13.8-16.5 23.3-30.8 23.3H170.7l9.2 48H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H159.1c-10.6 0-20.5-8.2-22.7-19.5L76.14 48H24C10.75 48 0 37.25 0 24S10.75 0 24 0h72zm32 464c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48zm384 0c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48z'
			></path>
		</svg>
	);
}

function HeartIcon(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 16 16' {...props}>
			<path
				fill='currentColor'
				d='M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92C0 2.755 1.79 1 4 1z'
			></path>
		</svg>
	);
}

export { HeartIcon, ShoppingCartIcon };
