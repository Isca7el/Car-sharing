/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import State from '../app/app.monk';
import Modal from '../app-modal/app-modal';
import './app-description.scss';
import Table from 'react-bootstrap/Table';

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
        <div className="title">
          <h3 className="add-item-title">{name}</h3>
          <p className="add-item-characters">
            {transmission}, {classify}
          </p>
        </div>
        <div className="technical">
          <h6 className="">Технические характеристики двигателя</h6>
          <Table responsive="lg" striped bordered hover>
            <thead>
              <tr>
                <th>Мощность двигателя</th>
                <th>Объем двигателя</th>
                <th>Расход толива</th>
                <th>Разгон до 100 км/ч</th>
                <th>Расход топлива на 100 км</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{power}</td>
                <td>{engine_capacity}</td>
                <td>{consumption}</td>
                <td>{acceleration}</td>
                <td>{acceleration}</td>
              </tr>
            </tbody>
          </Table>
          <h6 className="">Технические характеристики кузова</h6>
          <Table responsive="lg" striped bordered hover>
            <thead>
              <tr>
                <th>Обьем бака</th>
                <th>Обьем багажника</th>
                <th>Количество дверей</th>
                <th>Количество посадочных мест</th>
                <th>Масса</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{acceleration}</td>
                <td>{trunk_volume}</td>
                <td>{doors}</td>
                <td>{seats}</td>
                <td>{weight}</td>
              </tr>
            </tbody>
          </Table>
        </div>
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
