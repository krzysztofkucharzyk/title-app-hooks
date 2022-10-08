import React, { useState } from 'react';
import './App.css';
import Title from './Title';
import ButtonsPanel from './ButtonsPanel';

function App() {

  const [color, setColor] = useState('orange');
  
  const changeColor = (event) => {
    if (event === 'red') {
      setColor('red');
    } else if (event === 'blue') {
      setColor('blue');
    } else {
      setColor('green');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Title App on Hooks</h1>
      </header>
      <Title color={color}/>
      <ButtonsPanel changeColor={changeColor}/>
    </div>
  );
}

export default App;
