import React from 'react'
import './App.css';
import Header from './template/header/Header'
import Body from './template/body/Body'
import ParedesData from './data/Parades'


function App() {
  return (
    
      <div className="App">
        <ParedesData>
        <Header />
        <Body />
        </ParedesData>
      </div>
    
  );
}

export default App;
