import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store.js'
import DogPicsContainer from './components/DogPicsContainer'

class App extends Component {
  render() {
    return (
      <div className = "App">
      <Provider store={store}>
        <DogPicsContainer />
      </Provider>
      </div>
    );
  }
}

export default App;
