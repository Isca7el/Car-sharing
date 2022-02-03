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
    power: '',
    drive_unit: '',
    engine_capacity: '',
    acceleration: '',
    consumption: '',
    trunk_volume: '',
    fuel_tank_volume: '',
    weight: '',
    doors: null,
    seats: null,
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
  const {
    name,
    src,
    transmission,
    classify,
    engine_capacity,
    power,
    consumption,
    acceleration,
    trunk_volume,
    doors,
    seats,
    weight
  } = card;
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
        <h4 className="">Технические характеристики</h4>
        <p>Мощность двигателя: {power}</p>
        <p>Объем двигателя: {engine_capacity}</p>
        <p>Расход толива: {consumption}</p>
        <p>Разгон до 100 км/ч: {acceleration}</p>
        <p>Расход топлива на 100 км: {acceleration}</p>
        <p>Обьем бака: {acceleration}</p>
        <p>Обьем багажника: {trunk_volume}</p>
        <p>Количество дверей: {doors}</p>
        <p>Количество посадочных мест: {seats}</p>
        <p>Масса: {weight}</p>
        <button
          onClick={() => setIsModalOpened(true)}
          className="book-button"
          type="button"
          card={card}>
          Бронировать
        </button>
      </div>
      <Portal card={card}>
        <Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)} card={card} />
      </Portal>
    </div>
  );
};

const Portal = (props, { card }) => {
  card = { card };
  const node = document.createElement('div');
  document.body.appendChild(node);
  return ReactDOM.createPortal(props.children, node);
};

export default AppDescription;
