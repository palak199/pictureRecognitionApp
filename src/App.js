import React from 'react';
import Quiz from './Quiz'
import {FRUITS} from './Fruits';
import './App.css';

function App() {
  return (
    <div className="App">
      <Quiz questions={FRUITS}/>
    </div>
  );
}

export default App;
