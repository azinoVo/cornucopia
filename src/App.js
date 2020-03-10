import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import GameTabs from './components/GameTabs';
import Barnyard from './components/Barnyard';
import GeneralShop from './components/GeneralShop';
import GoSculptures from './components/GoSculptures';
import Greenhouse from './components/Greenhouse';
import HangingGarden from './components/HangingGarden';
import Home from './components/Home';
import Inventory from './components/Inventory';
import MainGarden from './components/MainGarden';
import Orchard from './components/Orchard';
import Cornucopia from './components/Cornucopia';
import apple from './assets/plants/apple.png';
import { Link } from 'react-router-dom';


function App() {
  return (
    // allow dynamic rendering depending on name
    <div className="App">
      <header>
        <Link to="/cornucopia"><img id='icon' src={apple} alt="apple"/></Link>
        <span>Cornucopia, Land of Excess</span>
      </header>
      <GameTabs />

      <Route exact path="/" component={Home} />
      <Route path="/barnyard" component={Barnyard} />
      <Route path="/shop" component={GeneralShop} />
      <Route path="/sculpture" component={GoSculptures} />
      <Route path="/greenhouse" component={Greenhouse} />
      <Route path="/hanging" component={HangingGarden} />
      <Route path="/greenhouse" component={Greenhouse} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/main" component={MainGarden} />
      <Route path="/orchard" component={Orchard} />
      <Route path="/cornucopia" component={Cornucopia} />


      <footer>Nguyen Vo 2020</footer>
    </div>
  );
}

export default App;
