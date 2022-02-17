import { Link } from 'react-router-dom';
import './app-list.scss';

const AppList = ({ data }) => {
  const currency = ' €';
  const carList = data.map((item, i) => {
    return (
      <li key={i} timeout={300} className="car-item">
        <Link to={`/car-description/${item.id}`}>
          <div className="add-item-wrapper">
            <div className="add-item">
              <h3 className="add-title">{item.name}</h3>
              <p className="add-item-characters">
                {item.transmission}, {item.classify}
              </p>
              <img src={`/images/${item.src}.jpg`} alt={item.src}></img>
              <span className="add-item-price">{item.rent + currency}</span>
            </div>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div className="app-content">
      <ul className="car-list">{carList}</ul>
    </div>
  );
};

export default AppList;
