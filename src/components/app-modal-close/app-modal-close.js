import './app-modal-close.css';

const ModalClose = ({ isModalCloseOpened, onClosed, onClose }) => {
  if (!isModalCloseOpened) {
    return null;
  }

  return (
    <div className="modal-close-app">
      <div className="overlay" onClick={onClosed}></div>
      <div className="modal-close">
        <h4>Хотите отменить бронирование?</h4>
        <div className="buttons-wrapper">
          <button className="button-close" onClick={onClose}>
            Да
          </button>
          <button className="button-close" onClick={onClosed}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalClose;
