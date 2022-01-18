import 'react-datepicker/dist/react-datepicker.css';
import PickupDate from '../app-pickup-date/app-pickup-date';
import './app-modal.css';

const Modal = ({ isOpened, onClose, card }) => {
  if (!isOpened) {
    return null;
  }

  return (
    <div className="modal">
      <div className="overlay pickup-date" onClick={onClose}></div>
      <div className="modal-content">
        <PickupDate onClose={onClose} card={card} />
      </div>
    </div>
  );
};

export default Modal;
