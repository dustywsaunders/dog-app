import React, { Component } from 'react';
import './App.css';
import DogPicsContainer from './components/DogPicsContainer'
import ImageContainer from './components/ImageContainer'
import User from './components/User';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className='Title'>Doggo</h1>
        </header>
        <User />
        <ImageContainer key = 'image'/>
        <DogPicsContainer key = 'questions'/>
        <footer className='Footer'>
          <a href = "https://goo.gl/forms/4dbbzYDqDTxHOxsv2" title = "googleform" target = "blank">BETA TESTERS FEEDBACK</a>
          <p>Made with ❤ by Leonie, Denis & Dusty at Codaisseur</p>
        </footer>
      </div>
    );
  }
}