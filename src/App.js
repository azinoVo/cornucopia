import React from 'react';
import './App.css';
import GameTabs from './components/GameTabs';

function App() {
  return (

    // allow dynamic rendering depending on name
    <div className="App">
      <GameTabs />
      <div><img src={require('../src/assets/plants/Green Tree with Flowers.png')} alt="loading..." /></div>
    </div>
  );
}

export default App;
