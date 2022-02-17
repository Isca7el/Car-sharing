import { Link } from 'react-router-dom';
import './app-error.css';

const Error = () => {
  return (
    <ul className="error">
      <Link to="/">
        <li className="error-title">У вас нет забронированного авто</li>
      </Link>
    </ul>
  );
};

export default Error;
