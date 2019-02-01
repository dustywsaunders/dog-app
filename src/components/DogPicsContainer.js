import * as React from 'react'
import { getBreeds } from '../actions/getBreeds'
import { getImage } from '../actions/getImage'
import { setCurrent } from '../actions/setCurrent'
import { addPoint } from '../actions/addPoint'
import { minusPoint } from '../actions/minusPoint'
import { connect } from 'react-redux'
import DogPics from './DogPics'
import Progress from './Progress';

const initialState = {backgroundColor1: 'rgb(144, 191, 231)',
backgroundColor2: 'rgb(144, 191, 231)',
backgroundColor3: 'rgb(144, 191, 231)',}

let level = 3

function changeDogName(){
  const dogIndexes = []
  while(dogIndexes.length < 3){
    var r = Math.floor(Math.random() * level);
    if(dogIndexes.indexOf(r) === -1) dogIndexes.push(r);
  }
  return dogIndexes
}

function changeOrderButtons(){
  const orderButton = []
  while(orderButton.length <= 2){
    var q = Math.floor(Math.random() * 3);
    if(orderButton.indexOf(q) === -1) orderButton.push(q);
  } 
  return orderButton
}

class DogPicsContainer extends React.Component {
  state = {
    ...initialState,
    dogName: this.checkDogName(),
    buttonOrder: changeOrderButtons()
  }

  determineLevel() {
    if (this.props.userPoint%10 === 0 && this.props.userPoint <= 270) {
      level += 3
    }
  }

  handleCorrect = () => {
    this.setState({backgroundColor1: 'lightgreen'})
    this.props.addPoint(1)
    this.determineLevel()

    setTimeout(() => {
      this.props.getBreeds(level)
        
      setTimeout(() => {
        this.setState({dogName: this.checkDogName(),
          buttonOrder: changeOrderButtons()})
        const current = this.props.current
        this.props.getImage(current)
      }, 100)
      
      this.resetButton()
    }, 2000)    
  }

  handleWrong1 = () => {
    this.setState({backgroundColor2: 'salmon'})
    this.setState({backgroundColor3: 'salmon'})
    this.setState({backgroundColor1: 'lightgreen'})
    this.props.minusPoint(1)
    this.determineLevel()

    setTimeout(() => {
      this.props.getBreeds(level)
      
      setTimeout(() => {
        this.setState({dogName: this.checkDogName(),
          buttonOrder: changeOrderButtons()})
        const current = this.props.current
        this.props.getImage(current)
      }, 100)

      this.resetButton()
    }, 2000)  
  }

  resetButton = () => {
    this.setState(initialState)
    if (!this.props.user.known.includes(this.props.current)) {
      this.props.setCurrent(this.props.current)
    }
  }

  componentDidMount() {
    this.props.getBreeds(level)
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }


  handleKeyPress = (event) => {
    if (event.keyCode === 37 && this.state.buttonOrder[0]===0) {
      this.handleCorrect()
    } else if (event.keyCode === 40 && this.state.buttonOrder[0]===1) {
      this.handleCorrect()
    } else if (event.keyCode === 39 && this.state.buttonOrder[0]===2) {
      this.handleCorrect()
    } else if (event.keyCode === 37 || event.keyCode === 40 || event.keyCode === 39) {
      this.handleWrong1()
    }
  } 

  checkDogName() {
    if (this.props.allbreeds === null) return ['akita', 'appenzeller']
    let num = changeDogName()
    let selectNum = num.filter(number => this.props.current !== Object.keys(this.props.allbreeds)[number])
    return [Object.keys(this.props.allbreeds)[selectNum[0]], Object.keys(this.props.allbreeds)[selectNum[1]]]
  }

  render() {
    if (this.props.allbreeds === null) return 'Loading...'

    return (
      <div>
        <Progress points = {this.props.user.points} wrong = {this.props.user.wrong}/>
        <DogPics allbreeds = { this.props.allbreeds } current = { this.props.current } 
          handleCorrect = {this.handleCorrect} handleWrong1 = {this.handleWrong1} 
          localState={this.state} addPoint = {this.props.addPoint} 
          userPoint = {this.props.userPoint} level={this.level} user={this.props.user}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    allbreeds: state.breeds.allbreeds,
    current: state.breeds.current,
    userPoint: state.user.points,
    user: state.user,
    level: level
  }
}

export default connect (mapStateToProps, { getImage, getBreeds, addPoint,minusPoint, level, setCurrent })(DogPicsContainer)