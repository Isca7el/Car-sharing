import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import PickupDate from '../app-pickup-date/app-pickup-date';
import AppNotification from '../app-notification/app-notification';
import './app-modal.css';

const Modal = ({ isOpened, onClose, card }) => {
  const [modalActive, setModalActive] = useState(false);
  if (!isOpened) {
    return null;
  }

  return (
    <div className="modal">
      <div className="overlay pickup-date" onClick={onClose}></div>
      <div className="modal-content">
        <PickupDate onClose={onClose} card={card} />
      </div>
      <AppNotification active={modalActive} setModalActive={setModalActive} />
    </div>
  );
};

export default Modal;
