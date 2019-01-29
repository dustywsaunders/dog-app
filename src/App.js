import React, { Component } from 'react';
import './App.css';
import DogPicsContainer from './components/DogPicsContainer'
import ImageContainer from './components/ImageContainer'


class App extends Component {
  render() {
    return (
      <div className = "App">
        <header>
          <h1 className='Title'>Doggo</h1>
        </header>
        <ImageContainer />
        <DogPicsContainer />
        <footer className='Footer'>
          <p>Made with ❤ by Leonie, Denis & Dusty at Codaisseur</p>
        </footer>
      </div>
    );
  }
}

export default App;
