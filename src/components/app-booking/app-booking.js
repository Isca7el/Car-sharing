import { useState, useEffect } from 'react';
import Error from '../app-error/app-error';
import { v4 as uuidv4 } from 'uuid';
import './app-booking.scss';

const AppBooking = () => {
  const [local, setLocal] = useState([]);
  useEffect(() => {
    onLocalLoaded();
  }, []);

  const list = JSON.parse(localStorage.getItem('data'));

  const onLocalLoaded = () => {
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
    const theTarget = e.currentTarget.parentNode.parentNode;
    const id = theTarget.id;
    const filterList = local.filter((item) => item.id !== id);
    setLocal(filterList);

    if (filterList.length == 0) {
      localStorage.removeItem('data');
    } else {
      localStorage.setItem('data', JSON.stringify(filterList));
      console.log(filterList);
    }
  };

  const bookList = local.map((item, i) => {
    return (
      <li className="boking-item" id={item.id} key={i}>
        <div className="car">
          <h2 className="title-book">{item.name}</h2>
          <img src={`/images/${item.src}.jpg`} className="book-img" alt="`${item.src}`"></img>
        </div>
        <div className="book-information">
          <div className="book">
            <div className="picked-date">
              <h3 className="book-title"> Начало аренды</h3>
              <span className="date">Число: {item.start.slice(0, 10)}</span>
              <span className="time">Время: {item.start.slice(11, 16)}</span>
            </div>
            <div className="picked-date">
              <h3 className="book-title">Конец аренды</h3>
              <span className="date">Число: {item.end.slice(0, 10)}</span>
              <span className="time">Время: {item.end.slice(11, 16)}</span>
            </div>
          </div>
        </div>
        <div className="book-price">
          <p className="price">Цена: {item.price}</p>
          <button className="book-cancel" onClick={handleKey}>
            Отменить бронирование
          </button>
        </div>
      </li>
    );
  });

  const content = list == null ? <Error /> : bookList;

  return <ul className="booking-list">{content}</ul>;
};

export default AppBooking;
