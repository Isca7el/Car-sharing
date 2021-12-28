import './app-item.css';

const AppItem = ({name, rent, src, classify, transmission}) =>{
  const currency = ' €';

    return(
      <div className="add-item">
        <h3 className="add-item-title">{name}</h3>
        <p className="add-item-characters">{transmission}, {classify}</p>
        <img src={`/images/${src}.jpg`} alt={src}></img>
        <span className="add-item-price">{rent + currency}</span>
      </div>

    )
}

export default AppItem;