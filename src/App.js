import React, { useState } from 'react';
import './App.css';
import Title from './Title';
import ButtonsPanel from './ButtonsPanel';

function App() {

  const [color, setColor] = useState('orange');
  
  const changeColor = (event) => {

    let newColor = '';

    if (event === 'red') {
      newColor = 'red';
    } else if (event === 'blue') {
      newColor = 'blue';
    } else {
      newColor = 'green';
    }

    setColor(newColor);
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
