
import './app-description.css';

const AppDescription = ({ name, rent, src, classify, transmission }) => {
  const currency = ' €';
  
  return (
    <div className="descriptiom-wrapper">
      <div className="descriptiom-image">
        <img src={`/images/${src}.jpg`} alt={src}></img>
      </div>
      <div className="description-inner">
        <p className="add-item-characters">{transmission}, {classify}</p>
        <h3 className="add-item-title">{name}</h3>
        <span className="add-item-price">{rent + currency}</span>
      </div>
    </div>
  )
}

export default AppDescription;