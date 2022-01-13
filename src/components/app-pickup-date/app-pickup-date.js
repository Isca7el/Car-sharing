import ReactDatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const PickupDate = ({ onClose, rent }) => {
  const [date, setDate] = useState({ startDate: new Date(), endDate: new Date() });
  const currency = ' €';

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
    localStorage.setItem('begin', arr.startDate);
    localStorage.setItem('end', arr.endDate);
  };

  useEffect(() => {
    ShowDate();
  });

  const ShowDate = () => {
    let start = date.startDate;
    let end = date.endDate;
    const result = Math.round((end - start) / (60 * 60 * 24 * 1000));
    console.log(result);
    return <p>{result * rent + currency}</p>;
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
      <button className="book-buton" onClick={handleDate(date)}>
        Бронировать
      </button>
    </div>
  );
};

export default PickupDate;
