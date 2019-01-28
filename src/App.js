import React, { Component } from 'react';
import './App.css';
import DogPicsContainer from './components/DogPicsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DogPicsContainer></DogPicsContainer>
      </div>
    );
  }
}

export default App;
