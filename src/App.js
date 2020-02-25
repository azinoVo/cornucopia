import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import GameTabs from './components/GameTabs';
import Feeder from './components/Feeder';
import GeneralShop from './components/GeneralShop';
import GoSculptures from './components/GoSculptures';
import Greenhouse from './components/Greenhouse';
import HangingGarden from './components/HangingGarden';
import Home from './components/Home';
import Inventory from './components/Inventory';
import MainGarden from './components/MainGarden';
import Orchard from './components/Orchard';
import apple from './assets/plants/apple.png';


function App() {
  return (
    // allow dynamic rendering depending on name
    <div className="App">
      <header>
        <img id='icon' src={apple} alt="apple"/>
        <span>Cornucopia, Land of Excess</span>
      </header>
      <GameTabs />

      <Route exact path="/" component={Home} />
      <Route path="/feeder" component={Feeder} />
      <Route path="/shop" component={GeneralShop} />
      <Route path="/sculpture" component={GoSculptures} />
      <Route path="/greenhouse" component={Greenhouse} />
      <Route path="/hanging" component={HangingGarden} />
      <Route path="/greenhouse" component={Greenhouse} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/main" component={MainGarden} />
      <Route path="/orchard" component={Orchard} />

      {/* <footer>Nguyen Vo 2020</footer> */}
    </div>
  );
}

export default App;
