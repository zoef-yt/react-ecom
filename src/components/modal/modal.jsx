import { AuthModalComponent } from './LoginCardModal';

const ModalComponent = ({ isModalOpened, closeModal, modalChildComponent }) => {
	const setModalData = (modalChildName) => {
		switch (modalChildName) {
			case 'AuthModal':
				return <AuthModalComponent />;
			default:
				closeModal();
				return <></>;
		}
	};
	return (
		<div onClick={() => closeModal()} className={`${isModalOpened ? 'modal-opened' : 'modal-display-none'}`}>
			{setModalData(modalChildComponent)}
		</div>
	);
};

export { ModalComponent };
