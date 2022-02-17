import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import State from './app.monk';
import AppHeader from '../app-header/app-header';
import AppFilter from '../app-filter/app-filter';
import AppList from '../app-list/app-list';
import AppDescription from '../app-description/app-description';
import AppBooking from '../app-booking/app-booking';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = State;
  }

  onHandleCheckbox = (e) => {
    if (this.state.filter === e.target.value) {
      this.setState({
        filter: '',
        checked: false,
        term: ''
      });
    } else {
      const currentCheckbox = e.target.parentNode.textContent;
      this.setState({
        filter: e.target.value,
        checked: true,
        term: currentCheckbox
      });
    }
  };

  filterPost = (items, filter, term) => {
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

  render() {
    const { data, filter, term } = this.state;

    const visibleData = this.filterPost(data, filter, term);

    return (
      <Router>
        <div className="app">
          <AppHeader />
          <div className="app-body">
            <Switch>
              <Route exact path="/">
                <AppFilter onHandleCheckbox={this.onHandleCheckbox} />
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
  }
}

export default App;
