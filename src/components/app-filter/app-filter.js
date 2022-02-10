import './app-filter.css';

const AppFilter = ({ onHandleCheckbox }) => {
  return (
    <div className="app-filter">
      <h2 className="app-filter_title">Фильтры</h2>
      <div className="app-filter-class">
        <h3 className="app-filter-class-title">Класс авто</h3>
        <aside className="app-filter-class-wrapper">
          <label className="app-filter-label">
            <input
              type="checkbox"
              value="classify"
              id="Эконом"
              className="app-filter-class-input"
              onClick={onHandleCheckbox}
            />
            Эконом
          </label>
          <label className="app-filter-label">
            <input
              type="checkbox"
              value="classify"
              id="Средний"
              className="app-filter-class-input"
              onClick={onHandleCheckbox}
            />
            Средний
          </label>
          <label className="app-filter-label">
            <input
              type="checkbox"
              value="classify"
              className="app-filter-class-input"
              onClick={onHandleCheckbox}
            />
            Бизнес
          </label>
          <label className="app-filter-label">
            <input
              type="checkbox"
              value="classify"
              className="app-filter-class-input"
              onClick={onHandleCheckbox}
            />
            Внедорожник
          </label>
          <label className="app-filter-label">
            <input
              type="checkbox"
              value="classify"
              className="app-filter-class-input"
              onClick={onHandleCheckbox}
            />
            Минивен
          </label>
        </aside>
      </div>
      <div className="app-filter-transmission">
        <h3 className="app-filter-transmission-title">Трансмиссия</h3>
        <aside className="app-filter-transmission-wrapper">
          <label className="app-filter-label">
            <input
              type="checkbox"
              className="app-filter-class-input"
              value="transmission"
              onClick={onHandleCheckbox}
            />
            Автомат
          </label>
          <label className="app-filter-label">
            <input
              type="checkbox"
              className="app-filter-class-input"
              value="transmission"
              onClick={onHandleCheckbox}
            />
            Механика
          </label>
        </aside>
      </div>
      <div className="app-filter-fuel">
        <h3 className="app-filter-fuel-title">Тип топлива</h3>
        <aside className="app-filter-fuel-wrapper">
          <label className="app-filter-label">
            <input
              type="checkbox"
              className="app-filter-class-input"
              value="fuel"
              onClick={onHandleCheckbox}
            />
            Бензин
          </label>
          <label className="app-filter-label">
            <input
              type="checkbox"
              className="app-filter-class-input"
              value="fuel"
              onClick={onHandleCheckbox}
            />
            Газ
          </label>
          <label className="app-filter-label">
            <input
              type="checkbox"
              className="app-filter-class-input"
              value="fuel"
              onClick={onHandleCheckbox}
            />
            Дизель
          </label>
        </aside>
      </div>
    </div>
  );
};

export default AppFilter;
