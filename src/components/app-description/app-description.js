/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import State from '../app/app.monk';
import './app-description.css';

const AppDescription = () => {
  const { carID } = useParams();
  const [card, setCar] = useState({
    name: '',
    rent: '',
    classify: '',
    transmission: '',
    fuel: '',
    src: '',
    id: ''
  });
  const carArr = State.data;

  const car = carArr.filter((item) => item.id == carID);
  console.log(...car);

  function onCarLoaded() {
    setCar(...car);
  }
  console.log(card);

  return <View card={card} />;
};

const currency = ' €';

const View = ({ card }) => {
  const { name, src, transmission, classify, rent } = card;
  return (
    <div className="descriptiom-wrapper">
      <div className="descriptiom-image">
        <img src={`/images/${src}.jpg`} alt={src}></img>
      </div>
      <div className="description-inner">
        <p className="add-item-characters">
          {transmission}, {classify}
        </p>
        <h3 className="add-item-title">{name}</h3>
        <span className="add-item-price">{rent + currency}</span>
      </div>
      <img></img>
    </div>
  );
};

export default AppDescription;
