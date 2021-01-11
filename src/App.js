import React from 'react'
import './App.css';
import Body from './template/body/Body'
import ParedesData from './data/Parades'


function App() {
  return (
    
      <div className="App">
        <ParedesData>
        <Body />
        </ParedesData>
        
      </div>
    
  );
}

export default App;
