import React from 'react';
import '../css/homepage.css';
import { Footer, Header, HomepageBody } from '../allComponent.jsx';
import { useTitle } from '../../custom-hooks/useTitle';
const Homepage = () => {
	useTitle('Home');
	return (
		<div className='homepage'>
			<Header />
			<HomepageBody />
			<Footer />
		</div>
	);
};

export { Homepage };
