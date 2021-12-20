import './app-item.css';

const AppItem = (props) =>{

  const {name, rent, src, classify, transmission} = props;
  
    return(
      <div className="add-item">
        <h3 className="add-item-title">{name}</h3>
        <p className="add-item-characters">{transmission}, {classify}</p>
        <img src={`/images/${src}.jpg`} alt={src}></img>
        <span className="add-item-price">{rent + ' €'}</span>
      </div>

    )
}

export default AppItem;