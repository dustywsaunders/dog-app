import React, { Component } from 'react';
import './App.css';
import DogPicsContainer from './components/DogPicsContainer'
import ImageContainer from './components/ImageContainer'
import User from './components/User';
import { connect } from 'react-redux'


class App extends Component {
  render() {
    // console.log(this.state);
    
    return (
      <div className="App">
        <header>
          <h1 className='Title'>Doggo</h1>
        </header>
        <User />
        <ImageContainer key = 'thisisakey'/>
        <DogPicsContainer key = {this.current}/>
        <footer className='Footer'>
          <p>Made with ❤ by Leonie, Denis & Dusty at Codaisseur</p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
    current: state.breeds.current
  }
}

export default connect (mapStateToProps)(App)
