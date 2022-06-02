import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [modalChildComponent, setModalChildComponent] = useState('');
	const openModal = (name) => {
		closeModal();
		setModalChildComponent(name);
		setIsModalOpened(true);
	};

	const closeModal = () => {
		setIsModalOpened(false);
	};

	return <ModalContext.Provider value={{ isModalOpened, modalChildComponent, openModal, closeModal }}>{children}</ModalContext.Provider>;
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
