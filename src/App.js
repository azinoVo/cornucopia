import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import GameTabs from './components/GameTabs';
import Orchard from './components/Orchard';

function App() {
  return (
    // allow dynamic rendering depending on name
    <div className="App">
      <GameTabs />

      <Route path="/orchard" component={Orchard} />
    </div>
  );
}

export default App;
