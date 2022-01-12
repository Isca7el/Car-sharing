import ReactDatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const PickupDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="modal-content ">
      <h3>Дата подачи авто</h3>
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
        isClearable
      />
    </div>
  );
};

export default PickupDate;
