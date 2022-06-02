import { useEffect } from 'react';

const useTitle = (title) => {
	useEffect(() => {
		if (title) document.title = `${title} | Need Games`;
		else document.title = 'Need Games';
	}, [title]);
};

export { useTitle };
