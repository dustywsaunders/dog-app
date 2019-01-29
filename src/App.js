import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store.js'
import DogPicsContainer from './components/DogPicsContainer'
// import user from './components/user'

class App extends Component {
  render() {
    return (
      <div className = "App">
      <Provider store={store}>
        <header>
          <h1 className='Title'>Doggo</h1>
        </header>
        {/* <user /> */} 
        <DogPicsContainer />
        <footer className='Footer'>
          <p>Made with ❤ by Leonie, Denis & Dusty at Codaisseur</p>
        </footer>
      </Provider>

      
    
      </div>
    );
  }
}

export default App;
