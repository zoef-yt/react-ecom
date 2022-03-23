import React from 'react';
import { useModal } from '../../context/modal/modal-context';
import '../css/modal.css';

const Modal = ({ children, showModal }) => {
	const { toggleModal } = useModal();
	return (
		<>
			<div className={`${showModal ? 'modal-opened' : 'modal-display-none'} modal`}>
				{children}
				<div onClick={() => toggleModal()} className={`${showModal ? 'modal-backdrop' : ''}`}></div>
			</div>
		</>
	);
};

export { Modal };
