import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import GameTabs from './components/GameTabs';
import Home from './components/Home';
import Orchard from './components/Orchard';

function App() {
  return (
    // allow dynamic rendering depending on name
    <div className="App">
      <GameTabs />

      <Route exact path="/" component={Home} />
      <Route path="/orchard" component={Orchard} />
    </div>
  );
}

export default App;
