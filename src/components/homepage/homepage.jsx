import React from 'react';
import '../css/homepage.css';
import { Footer, Header, HomepageBody } from '../allComponent.jsx';
const Homepage = () => {
	return (
		<div className='homepage'>
			<Header />
			<HomepageBody />
			<Footer />
		</div>
	);
};

export { Homepage };
