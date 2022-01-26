import ReactDatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const PickupDate = ({ onClose, card }) => {
  const { rent } = card;
  const [date, setDate] = useState({ startDate: new Date(), endDate: new Date() });
  const currency = ' €';
  let price;

  // eslint-disable-next-line no-unused-vars
  const Notification = ({ handleDate, onClose }) => {
    return (
      <div className="notification">
        <ReactNotification />
        <Push />
      </div>
    );
  };

  function Push() {
    const onHandleNotification = () => {
      store.addNotification({
        title: 'Вами забронирован',
        message: 'Вы успешно забронировали',
        type: 'success',
        container: 'top-right',
        insert: 'top',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 2000
        }
      });
    };

    const handleButton = () => {
      onClose();
      handleDate(date);
      onHandleNotification();
    };

    return (
      <div>
        <button className="book-buton" onClick={handleButton}>
          Бронировать
        </button>
      </div>
    );
  }

  const handleDateChange = (dateName, dateValue) => {
    let { startDate, endDate } = date;

    if (dateName === 'startDateTime') {
      startDate = dateValue;
    } else {
      endDate = dateValue;
    }

    setDate({
      startDate,
      endDate
    });
  };

  const handleDate = (arr) => {
    if (localStorage.length == 0) {
      localStorage.setItem('data', []);
      const data = [];
      const exm = card;
      exm.start = arr.startDate;
      exm.end = arr.endDate;
      exm.price = price;
      data.push(exm);
      localStorage.setItem('data', JSON.stringify(data));
    } else {
      const data = JSON.parse(localStorage.getItem('data'));
      const exm = card;
      exm.start = arr.startDate;
      exm.end = arr.endDate;
      exm.price = price;
      data.push(exm);
      localStorage.setItem('data', JSON.stringify(data));
    }
  };

  useEffect(() => {
    ShowDate();
  });

  const ShowDate = () => {
    let start = date.startDate;
    let end = date.endDate;
    const result = Math.round((end - start) / (60 * 60 * 24 * 1000));
    let sum = result * rent <= 0 ? null : result * rent + currency;
    price = sum;
    return <p>{sum}</p>;
  };

  return (
    <div className="modal-content">
      <h3>Дата подачи авто</h3>
      <ReactDatePicker
        id="start-date-time"
        name="startDateTime"
        className="form-control"
        selected={date.startDate}
        value={date.startDate}
        onChange={(date) => handleDateChange('startDateTime', date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="yyyy-MM-dd, h:mm a"
        timeCaption="time"
      />

      <ReactDatePicker
        id="end-date-time"
        name="endDateTime"
        className="form-control"
        selected={date.endDate}
        value={date.endDate}
        onChange={(date) => handleDateChange('endDateTime', date)}
        placeholderText="choose end date of event"
        isClearable={true}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="yyyy-MM-dd, h:mm a"
        timeCaption="time"
      />
      <ShowDate />
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <Notification />
    </div>
  );
};

export default PickupDate;
