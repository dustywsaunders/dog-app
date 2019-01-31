import * as React from 'react'
import { getBreeds } from '../actions/getBreeds'
import { getImage } from '../actions/getImage'
import { setBreeds } from '../actions/setBreeds'
import { addPoint } from '../actions/addPoint'
import { connect } from 'react-redux'
import DogPics from './DogPics'


function changeDogName(){
const arr = []
while(arr.length < 3){
var r = Math.floor(Math.random()*87);
if(arr.indexOf(r) === -1) arr.push(r);
}
return arr
}
// const num = changeDogName()


function changeOrderButtons(){
const orderButton = []
while(orderButton.length <= 2){
var q = Math.floor(Math.random()*3);
if(orderButton.indexOf(q) === -1) orderButton.push(q);
} 
return orderButton
}

class DogPicsContainer extends React.Component {
  state = {
    backgroundColor1: 'rgb(144, 191, 231)',
    backgroundColor2: 'rgb(144, 191, 231)',
    backgroundColor3: 'rgb(144, 191, 231)',
    dogName: this.checkDogName(),
    buttonOrder: changeOrderButtons()
    }  

  handleCorrect = () => {
    this.setState({backgroundColor1: 'lightgreen'})


    this.props.addPoint(1)

    
    setTimeout(() => {
      this.props.getBreeds()
      setTimeout(() => {
        this.setState({dogName: this.checkDogName(),
          buttonOrder: changeOrderButtons()})
        const current = this.props.current
        this.props.getImage(current)
      }, 50)
      this.resetButton()
      
    }, 2000)    
  }

  handleWrong1 = () => {

    this.setState({backgroundColor2: 'salmon'})
    this.setState({backgroundColor3: 'salmon'})

    this.setState({backgroundColor1: 'lightgreen'})
    setTimeout(() => {
      this.props.getBreeds()
      setTimeout(() => {
        this.setState({dogName: changeDogName(),
          buttonOrder: changeOrderButtons()})
        const current = this.props.current
        this.props.getImage(current)
      }, 50)
      this.resetButton()
      
    }, 2000)  
  }

  handleWrong2 = () => {
    this.setState({backgroundColor2: 'salmon'})
    this.setState({backgroundColor3: 'salmon'})

    this.setState({backgroundColor1: 'lightgreen'})
    setTimeout(() => {
      this.props.getBreeds()
      setTimeout(() => {
        this.setState({dogName: changeDogName(),
          buttonOrder: changeOrderButtons()})
        const current = this.props.current
        this.props.getImage(current)
      }, 50)
      this.resetButton()
      
    }, 2000) 
  }

  resetButton = () => {
    this.setState({
      backgroundColor1: 'rgb(144, 191, 231)',
      backgroundColor2: 'rgb(144, 191, 231)',
      backgroundColor3: 'rgb(144, 191, 231)'
    })
  }

  componentDidMount() {
    this.props.getBreeds()
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  handleKeyPress(event) {
    if (event.keyCode === 37) {
      console.log('you pressed left');
    }
    else if (event.keyCode === 40) {
      console.log('you pressed down');
    }
    else if (event.keyCode === 39) {
      console.log('you pressed right');
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

    // console.log(Object.keys(this.props.allbreeds)[num1])
    console.log(this.state.buttonOrder)
    console.log(this.checkDogName())

    return (
      <div>
      <DogPics allbreeds = { this.props.allbreeds } current = { this.props.current } handleCorrect = {this.handleCorrect}
      handleWrong1 = {this.handleWrong1} handleWrong2 = {this.handleWrong2} localState={this.state}/>
      </div>
      

    )

  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    allbreeds: state.breeds.allbreeds,
    current: state.breeds.current,
    user: state.user
  }
}

export default connect (mapStateToProps, { getImage, getBreeds, setBreeds, addPoint })(DogPicsContainer)
