import React from 'react';
import { Header } from '../header/header';
import '../css/homepage.css';
import { HomepageBody } from './homepage-body';
import { Footer } from '../footer/footer';
const Homepage = () => {
	return (
		<div className={'homepage'}>
			<Header />
			<HomepageBody />
			<Footer />
		</div>
	);
};

export { Homepage };
