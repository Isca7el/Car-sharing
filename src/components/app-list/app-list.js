import AppItem from '../app-item/app-item';
import './app-list.css';

const AppList = ({data}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item
    return (
      <AppItem
      key={id}
      {...itemProps}/>
    )
  });

  return (
    <div className="app-content">
      <ul className="car-list">
        {elements};
      </ul>
    </div>
  );
}

export default AppList;