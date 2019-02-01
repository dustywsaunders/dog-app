import React, { Component } from 'react';
import './App.css';
import DogPicsContainer from './components/DogPicsContainer'
import ImageContainer from './components/ImageContainer'
import User from './components/User';
import { connect } from 'react-redux'
import Progress from './components/Progress';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className='Title'>Doggo</h1>
        <User className='User' />
        <Progress points = {this.props.user.points} wrong = {this.props.user.wrong}/>

        </header>
        {/* <p className="Guess">Can you guess the dog breed?</p> */}
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
    current: state.breeds.current,
    user: state.user

  }
}

export default connect (mapStateToProps)(App)
