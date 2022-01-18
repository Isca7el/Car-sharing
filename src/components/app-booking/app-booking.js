import Error from '../app-error/app-error';
import './app-booking.css';

const AppBooking = () => {
  const booking = JSON.parse(localStorage.getItem('data'));
  console.log(booking[0][0].slice(11, 16));
  const content =
    booking == null ? (
      <Error />
    ) : (
      booking.map((item, i) => {
        return (
          <li className="boking-item" key={i}>
            <h2>{item[2].name}</h2>
            <img
              src={`/images/${item[2].src}.jpg`}
              className="booking-img"
              alt="`${item[2].src}`"></img>
            <h3> Начало аренды</h3>
            <p>
              <span className="date">Число: {item[0].slice(0, 10)}</span>
              <span className="time">Время: {item[0].slice(11, 16)}</span>
            </p>
            <h3>Конец аренды</h3>
            <p>
              <span className="date">Число: {item[1].slice(0, 10)}</span>
              <span className="time">Время: {item[1].slice(11, 16)}</span>
            </p>
            <button>Отменить бронирование</button>
          </li>
        );
      })
    );

  return <ul className="booking-list">{content}</ul>;
};

export default AppBooking;
