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
        {/* <TestButton /> */}
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

const mapStateToProps = (state) => {
  
  return {
    current: state.breeds.current
  }
}

export default connect (mapStateToProps)(App)
