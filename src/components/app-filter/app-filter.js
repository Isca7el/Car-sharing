import './app-filter.css';

const AppFilter = (props) => {

  const {handleCheckbox} = props;

  return (
    <div className="app-filter">
      <h2 className="app-filter_title">Фильтры</h2>
      <div className="app-filter-class">
        <h3 className="app-filter-class-title">Класс авто</h3>
        <aside className="app-filter-class-wrapper">
          <label>
            <input type="checkbox"
              value="classify"
              id="Эконом"
              className="app-filter-class-input"
              onClick={handleCheckbox}/>
            Эконом</label>
          <label>
            <input type="checkbox"
              value="classify"
              id="Средний"
              className="app-filter-class-input"
              onClick={handleCheckbox} />
            Средний</label>
          <label>
            <input type="checkbox"
              value="classify"
              className="app-filter-class-input"
              onClick={handleCheckbox} />
            Бизнес</label>
          <label>
            <input type="checkbox"
              value="classify"
              className="app-filter-class-input"
              onClick={handleCheckbox} />
            Внедорожник</label>
          <label>
            <input type="checkbox"
              value="classify"
              className="app-filter-class-input"
              onClick={handleCheckbox} />
            Минивен</label>
        </aside>
      </div>
      <div className="app-filter-transmission">
        <h3 className="app-filter-transmission-title">Трансмиссия</h3>
        <aside className="app-filter-transmission-wrapper">
          <label>
            <input type="checkbox"
              className="app-filter-class-input"
              value="transmission"
              onClick={handleCheckbox} />
            Автомат</label>
          <label>
            <input type="checkbox"
              className="app-filter-class-input"
              value="transmission"
              onClick={handleCheckbox} />
            Механика</label>
        </aside>
      </div>
      <div className="app-filter-fuel">
        <h3 className="app-filter-fuel-title">Тип топлива</h3>
        <aside className="app-filter-fuel-wrapper">
          <label>
            <input type="checkbox"
              className="app-filter-class-input"
              value="fuel"
              onClick={handleCheckbox}/>
            Бензин</label>
          <label>
            <input type="checkbox"
              className="app-filter-class-input"
              value="fuel"
              onClick={handleCheckbox}/>
            Газ</label>
          <label>
            <input type="checkbox"
              className="app-filter-class-input"
              value="fuel"
              onClick={handleCheckbox}/>
            Дизель</label>
        </aside>
      </div>
    </div>
  );
}

export default AppFilter;