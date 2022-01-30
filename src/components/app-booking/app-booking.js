import { useState, useEffect } from 'react';
import Error from '../app-error/app-error';
import { v4 as uuidv4 } from 'uuid';
import './app-booking.css';

const AppBooking = () => {
  const [local, setLocal] = useState([]);
  useEffect(() => {
    onLocalLoaded();
  }, []);

  const list = JSON.parse(localStorage.getItem('data'));

  const onLocalLoaded = () => {
    const list = JSON.parse(localStorage.getItem('data'));
    if (list == null) {
      return list;
    } else {
      for (let i = 0; i < list.length; i++) {
        list[i].id = uuidv4();
      }
      setLocal(list);
    }
    setLocal(list);
  };

  const handleKey = (e) => {
    const theTarget = e.currentTarget.parentNode;
    const id = theTarget.id;
    const filterList = local.filter((item) => item.id !== id);
    console.log(filterList);
    setLocal(filterList);

    if (filterList.length == 0) {
      localStorage.removeItem('data');
    } else {
      localStorage.setItem('data', JSON.stringify(filterList));
    }
  };

  const bookList = local.map((item, i) => {
    return (
      <li className="boking-item" id={item.id} key={i}>
        <h2>{item.name}</h2>
        <img src={`/images/${item.src}.jpg`} className="booking-img" alt="`${item.src}`"></img>
        <h3> Начало аренды</h3>
        <p>
          <span className="date">Число: {item.start.slice(0, 10)}</span>
          <span className="time">Время: {item.start.slice(11, 16)}</span>
        </p>
        <h3>Конец аренды</h3>
        <p>
          <span className="date">Число: {item.end.slice(0, 10)}</span>
          <span className="time">Время: {item.end.slice(11, 16)}</span>
        </p>
        <p>Цена: {item.price}</p>
        <button onClick={handleKey}>Отменить бронирование</button>
      </li>
    );
  });

  const content = list == null ? <Error /> : bookList;

  return <ul className="booking-list">{content}</ul>;
};

export default AppBooking;
