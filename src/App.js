import React from 'react';
import './App.css';
import Portal from './components/Portal';
import ComponentC from './components/ComponentC';

function App() {
  return (
    <div className="App">
      <ComponentC />
      <Portal target="componentCUL">
        <li>menu1</li>
        <li>menu1</li>
        <li>menu1</li>
        <li>menu1</li>
        <li>menu1</li>
        <li>menu1</li>
        <li>menu1</li>
        <li>menu1</li>
      </Portal>
    </div>
  );
}

export default App;
