import React from 'react';

function ShoppingCartIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 576 512' {...props}>
			<path
				fill='currentColor'
				d='M96 0c11.5 0 21.4 8.19 23.6 19.51L121.1 32h420.7c20.3 0 36.5 20.25 30.8 40.66l-54 192.04c-3.9 13.8-16.5 23.3-30.8 23.3H170.7l9.2 48H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H159.1c-10.6 0-20.5-8.2-22.7-19.5L76.14 48H24C10.75 48 0 37.25 0 24S10.75 0 24 0h72zm32 464c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48zm384 0c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48z'
			></path>
		</svg>
	);
}

function HeartIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 16 16' {...props}>
			<path
				fill='currentColor'
				d='M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92C0 2.755 1.79 1 4 1z'
			></path>
		</svg>
	);
}

function SecondHeartIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 256 256' {...props}>
			<path
				fill='currentColor'
				d='m133.6 211.9l81.1-81c19.9-20 22.8-52.7 4-73.6a52 52 0 0 0-75.5-2.1L128 70.5l-13.2-13.2c-19.9-19.9-52.6-22.8-73.6-4a52 52 0 0 0-2 75.5l83.1 83.1a8 8 0 0 0 11.3 0Z'
				opacity='.2'
			></path>
			<path
				fill='currentColor'
				d='M128 222.2a15.6 15.6 0 0 1-11.3-4.7l-83.2-83.1a60 60 0 0 1 2.4-87a57.6 57.6 0 0 1 43-14.6a64.5 64.5 0 0 1 41.6 18.9l7.5 7.4l9.5-9.5a60 60 0 0 1 87.1 2.3c10.5 11.6 15.6 26.9 14.6 43.1a64.3 64.3 0 0 1-18.9 41.5l-81 81a15.6 15.6 0 0 1-11.3 4.7ZM75 48.7a42.3 42.3 0 0 0-28.4 10.5a44 44 0 0 0-1.7 63.9l88.7 88.8l-5.6-5.7l81-81c17.4-17.4 19.1-45.5 3.7-62.6a43.9 43.9 0 0 0-63.8-1.7l-15.3 15.2a8 8 0 0 1-11.3 0L109.2 63A48.5 48.5 0 0 0 75 48.7Z'
			></path>
		</svg>
	);
}

function SunIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 16 16' {...props}>
			<g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5'>
				<circle cx='8' cy='8' r='3.25'></circle>
				<path d='m2.75 13.25l.5-.5m9.5 0l.5.5m-.5-10l.5-.5m-10 .5l-.5-.5M2.25 8h-1m13.5 0h-1M8 13.75v1m0-13.5v1'></path>
			</g>
		</svg>
	);
}

function HalfMoonIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 20 20' {...props}>
			<path
				fill='currentColor'
				d='M17.39 15.14A7.33 7.33 0 0 1 11.75 1.6c.23-.11.56-.23.79-.34a8.19 8.19 0 0 0-5.41.45a9 9 0 1 0 7 16.58a8.42 8.42 0 0 0 4.29-3.84a5.3 5.3 0 0 1-1.03.69z'
			></path>
		</svg>
	);
}
export { HeartIcon, ShoppingCartIcon, SunIcon, HalfMoonIcon, SecondHeartIcon };
