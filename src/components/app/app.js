import { Component } from 'react/cjs/react.production.min';
import AppHeader from '../app-header/app-header';
import AppFilter from '../app-filter/app-filter';
import AppList from '../app-list/app-list';
import AppItem from '../app-item/app-item';


import './app.css'

class App extends Component {

constructor(props) {
  super(props);
  this.state ={
    data: [
      {name: 'VolksWagen Polo', rent: 17, type: 'econom', classify: 'Эконом', transmission: 'Механика', fuel: 'Бензин', src: 'polo', id: 1},
      {name: 'Toyota Corolla', rent: 22, classify: 'Автомат', transmission: 'Автомат', fuel: 'Бензин', src: 'Camaro',  id: 2},
      {name: 'Honda Civic AT', rent: 24, classify: 'Автомат', transmission: 'Автомат', fuel: 'Бензин', src: 'honda-civic-at',  id: 3},
      {name: 'Peugeot 301', rent: 25, classify: 'Автомат', transmission: 'Автомат', fuel: 'Бензин', src: 'Peugeot-301',  id: 4},
      {name: 'Kia Sportage', rent: 24, classify: 'Внедорожник', transmission: 'Автомат', fuel: 'Бензин', src: 'Sportage', id: 5},
      {name: 'Chevrolet Camaro Convertible', rent: 120, classify: 'Бизнес', transmission: 'Автомат', fuel: 'Бензин', src: 'Camaro', id: 6},
      {name: 'Mercedes GLE 250d 4MATIC', rent: 190, classify: 'Средний', transmission: 'Автомат', fuel: 'Бензин', src: 'MercedesBenz-GLE',  id: 7},
    ],
    filter: '',
    checked: false,
  }
}

  handleCheckbox = e =>  {
    if (this.state.filter === e.target.value) this.setState({filter: 'none'});
    else this.setState({filter: e.target.value, checked: true})
  }

  filterPost = (items, filter) => {
    items.map = (item =>{
      if (item.type === this.state.filter || this.state.filter === false){
        <AppItem/>
      } else return items;
    })
  }
   
  render() {
    const {data, filter} = this.state;
    console.log(data);
    const visibleData = this.filterPost(data, filter);

    return (
      <div className="app">
        <AppHeader/>
        <div className='app-body'>
          <AppFilter
          handleCheckbox={this.handleCheckbox}/>
          <AppList
          data={visibleData}/>
        </div>
      </div>
    );
  }
  
}

export default App;