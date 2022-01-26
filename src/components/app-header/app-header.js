import { Link } from 'react-router-dom';
import './app-header.css';

const AppHeader = () => {
  return (
    <ul className="app-header-list">
      <Link to="/">
        <li className="app-header-item">Парк авто</li>
      </Link>
      <Link to="/car-booking">
        <li className="app-header-item">Бронирование</li>
      </Link>
      <li className="app-header-item">Условия проката</li>
      <li className="app-header-item">Отзывы</li>
      <li className="app-header-item">Контакты</li>
      <li className="app-header-item">On-line оплата</li>
    </ul>
  );
};

export default AppHeader;
