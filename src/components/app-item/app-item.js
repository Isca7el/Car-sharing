import { Link } from 'react-router-dom';
import './app-item.css';

const AppItem = ({ name, rent, src, classify, transmission, onClickTar }) => {
  const currency = ' €';

  return (
    <Link to="/car-description"
    onClick={onClickTar}>
      <div className="add-item">
        <h3 className="add-item-title">{name}</h3>
        <p className="add-item-characters">{transmission}, {classify}</p>
        <img src={`/images/${src}.jpg`} alt={src}></img>
        <span className="add-item-price">{rent + currency}</span>
      </div>
    </Link>
  )
}

export default AppItem;