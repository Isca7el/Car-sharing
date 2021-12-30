import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AppHeader from '../app-header/app-header';
import AppFilter from '../app-filter/app-filter';
import AppList from '../app-list/app-list';
import AppDescription from '../app-description/app-description';

import './app.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'VolksWagen Polo', rent: 17, classify: 'Эконом', transmission: 'Механика', fuel: 'Бензин', src: 'polo', id: 1 },
        { name: 'Toyota Corolla', rent: 22, classify: 'Автомат', transmission: 'Автомат', fuel: 'Бензин', src: 'Corolla', id: 2 },
        { name: 'Honda Civic AT', rent: 24, classify: 'Автомат', transmission: 'Автомат', fuel: 'Бензин', src: 'honda-civic-at', id: 3 },
        { name: 'Peugeot 301', rent: 25, classify: 'Автомат', transmission: 'Автомат', fuel: 'Бензин', src: 'Peugeot-301', id: 4 },
        { name: 'Kia Sportage', rent: 24, classify: 'Внедорожник', transmission: 'Автомат', fuel: 'Бензин', src: 'Sportage', id: 5 },
        { name: 'Chevrolet Camaro Convertible', rent: 120, classify: 'Бизнес', transmission: 'Автомат', fuel: 'Бензин', src: 'Camaro', id: 6 },
        { name: 'Mercedes GLE 250d 4MATIC', rent: 190, classify: 'Средний', transmission: 'Автомат', fuel: 'Бензин', src: 'MercedesBenz-GLE', id: 7 },
        { name: 'Mercedes Vito', rent: 37, classify: 'Минивен', transmission: 'Механика', fuel: 'Бензин', src: 'Mercedes Vito', id: 8 },
      ],
      filter: '',
      checked: false,
      term: '',
    }
  }

  onHandleCheckbox = e => {
    if (this.state.filter === e.target.value) {
      this.setState({
        filter: '',
        checked: false,
        term: ''
      });
    }
    else {
      const currentCheckbox = e.target.parentNode.textContent;
      this.setState(
        {
          filter: e.target.value,
          checked: true,
          term: currentCheckbox
        },
      )
    }
  }

  onClickTar = e => {
    console.log(e.parentNode);
  }

  filterPost = (items, filter, term) => {
    switch (filter) {
      case 'classify': {
        return items.filter(item => item.classify === term)
      }
      case 'transmission': {
        return items.filter(item => item.transmission === term)
      }
      case 'fuel': {
        return items.filter(item => item.fuel === term)
      }
      default:
        return items
    }
  }

  readInput = (e) => {

  }

  render() {
    const { data, filter, term } = this.state;

    const visibleData = this.filterPost(data, filter, term);

    return (
      <Router>
        <div className="app">
          <AppHeader />
          <div className='app-body'>
            <Switch>
              <Route exact path="/">
                <AppFilter onHandleCheckbox={this.onHandleCheckbox} />
                <AppList
                  data={visibleData} />
              </Route>
              <Route exact path="/car-description">
                <AppDescription />
              </Route>
            </Switch>
          </div>
        </div>
      </Router >
    );
  }

}

export default App;