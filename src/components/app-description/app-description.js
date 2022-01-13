/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import State from '../app/app.monk';
import Modal from '../app-modal/app-modal';
import './app-description.css';

const AppDescription = () => {
  const { carID } = useParams();
  const [card, setCar] = useState({
    name: '',
    rent: null,
    classify: '',
    transmission: '',
    fuel: '',
    src: '',
    id: null
  });
  const carArr = State.data;
  const car = carArr.filter((item) => item.id == carID);

  useEffect(() => {
    onCarLoaded();
  });

  function onCarLoaded() {
    setCar(car[0]);
  }

  return <View card={card} />;
};

const View = ({ card }) => {
  const { name, src, transmission, classify } = card;
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className="descriptiom-wrapper">
      <div className="descriptiom-image">
        <img className="img-car" src={`/images/${src}.jpg`} alt={src}></img>
      </div>
      <div className="description-inner">
        <p className="add-item-characters">
          {transmission}, {classify}
        </p>
        <h3 className="add-item-title">{name}</h3>
        <button onClick={() => setIsModalOpened(true)} className="book-button" type="button">
          Бронировать
        </button>
      </div>
      <Portal>
        <Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)} />
      </Portal>
    </div>
  );
};

const Portal = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node);
  return ReactDOM.createPortal(props.children, node);
};

export default AppDescription;
