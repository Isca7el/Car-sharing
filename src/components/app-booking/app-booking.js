const AppBooking = () => {
  const booking = JSON.parse(localStorage.getItem('data'));
  console.log(booking);

  return (
    <ul className="booking-list">
      <div>
        <h2>{booking[2].name}</h2>
        <img src={`/images/${booking[2].src}.jpg`} className="booking-img" alt="`item`"></img>
        <h3> Начало аренды</h3>
        <p>{booking[0]}</p>
        <h3>Конец аренды</h3>
        <p>{booking[1]}</p>
      </div>
      <button>Отменить бронирование</button>
    </ul>
  );
};

export default AppBooking;
