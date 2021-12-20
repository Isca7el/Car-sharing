import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="app-filter">
      <h2 className="app-filter_title">Фильтры</h2>
      <div className="app-filter-class">
        <h3 className="app-filter-class-title">Класс авто</h3>
        <aside className="app-filter-class-wrapper">
          {/* <ul className="app-filter-class-list"> 
            <li className="app-filter-class-list"></li>
            <li className="app-filter-class-list"></li>
            <li className="app-filter-class-list"></li>
            <li className="app-filter-class-list"></li>
            <li className="app-filter-class-list"></li>
          </ul> */}
          <label>
            <input type="checkbox" className="app-filter-class-input"></input>
            Эконом</label>
          <label>
            <input type="checkbox" className="app-filter-class-input"></input>
            Средний</label>
          <label>
            <input type="checkbox" className="app-filter-class-input"></input>
            Бизнес</label>
          <label>
            <input type="checkbox" className="app-filter-class-input"></input>
            Внедорожник</label>
          <label>
            <input type="checkbox" className="app-filter-class-input"></input>
            Минивен</label>
        </aside>
      </div>
      <div className="app-filter-transmission">
        <h3 className="app-filter-transmission-title">Трансмиссия</h3>
        <aside className="app-filter-transmission-wrapper">
          <label htmlFor="automat">
          <input type="checkbox" className="app-filter-class-input"></input>
            Автомат</label>
          <label>
          <input type="checkbox" className="app-filter-class-input"></input>
            Механика</label>
        </aside>
      </div>
      <div className="app-filter-fuel">
        <h3 className="app-filter-fuel-title">Тип топлива</h3>
        <aside className="app-filter-fuel-wrapper">
          <label>
            <input type="checkbox" className="app-filter-class-input"></input>
            Бензин</label>
          <label>
            <input type="checkbox" className="app-filter-class-input"></input>
            Газ</label>
          <label>
            <input type="checkbox" className="app-filter-class-input"></input>
            Дизель</label>
        </aside>
      </div>
    </div>
  );
}

export default AppFilter;