import ReactDatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const DropOffDate = () => {
  const [selectedDropDate, setSelectedDropDate] = useState(null);

  return (
    <div className="modal-content ">
      <h3>Дата подачи авто</h3>
      <ReactDatePicker
        selected={selectedDropDate}
        onChange={(date) => setSelectedDropDate(date)}
        minDate={new Date()}
        isClearable
      />
    </div>
  );
};

export default DropOffDate;
