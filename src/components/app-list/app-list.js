import AppItem from '../app-item/app-item';
import './app-list.css';

const AppList = ({data}) => {
  
  const carList = data.map(item => {
    const { id, ...itemProps } = item;
   
    return (
      <AppItem
        key={id}
        {...itemProps}/>
    )
  })
  
  return (
    <div className="app-content">
      <ul className="car-list">
        {carList}
      </ul>
    </div>
  );
}

export default AppList;