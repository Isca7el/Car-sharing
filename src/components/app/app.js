import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import State from './app.monk';
import AppHeader from '../app-header/app-header';
import AppFilter from '../app-filter/app-filter';
import AppList from '../app-list/app-list';
import AppDescription from '../app-description/app-description';
import AppBooking from '../app-booking/app-booking';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import './app.scss';

const App = () => {
  const state = State;
  const { data } = state;
  const [filterParams, setFilterStr] = useState({
    filter: '',
    checked: '',
    term: ''
  });

  const onHandleCheckbox = (e) => {
    const currentCheckbox = e.target.parentNode.textContent;
    if (filterParams.filter === e.target.value) {
      setFilterStr({
        filter: '',
        checked: false,
        term: ''
      });
    } else {
      setFilterStr({
        filter: e.target.value,
        checked: true,
        term: currentCheckbox
      });
    }
  };

  const filterPost = (items, filter, term) => {
    switch (filter) {
      case 'classify': {
        return items.filter((item) => item.classify === term);
      }
      case 'transmission': {
        return items.filter((item) => item.transmission === term);
      }
      case 'fuel': {
        return items.filter((item) => item.fuel === term);
      }
      default:
        return items;
    }
  };

  const visibleData = filterPost(data, filterParams.filter, filterParams.term);

  return (
    <Router>
      <ReactNotifications />
      <div className="app">
        <AppHeader />
        <div className="app-body">
          <Switch>
            <Route exact path="/">
              <AppFilter onHandleCheckbox={onHandleCheckbox} />
              <AppList data={visibleData} />
            </Route>
            <Route path="/car-description/:carID">
              <AppDescription />
            </Route>
            <Route path="/car-booking">
              <AppBooking />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
