import 'react-datepicker/dist/react-datepicker.css';
import PickupDate from '../app-pickup-date/app-pickup-date';
import './app-modal.css';

const Modal = ({ isOpened, onClose }) => {
  if (!isOpened) {
    return null;
  }

  return (
    <div className="modal">
      <div className="overlay pickup-date" onClick={onClose}></div>
      <div className="modal-content ">
        <PickupDate />
      </div>
    </div>
  );
};

export default Modal;