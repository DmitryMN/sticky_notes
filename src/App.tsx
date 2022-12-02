import React from 'react';
import './App.css';
import { Input } from './components/UI/Input';

export const App = () => {
  return (
    <div className="App">
    <div className="container">
      <h1>Sticky Notes</h1>
      <Input placeHolderValue='Search...'/>
    </div>
  </div>
  )
}

export default App;
