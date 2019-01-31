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
    dogName: changeDogName(),
    buttonOrder: changeOrderButtons()
    }


  handleCorrect = () => {
    this.setState({backgroundColor1: 'lightgreen'})
  

    this.props.addPoint(1)


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

  render() {
    console.log(this.state.dogName)
    console.log(this.state.buttonOrder)
    // console.log(this.props);
    if (!this.props.allbreeds) return 'Loading...'
    return (
      <div>
      <DogPics allbreeds = { this.props.allbreeds } current = { this.props.current } handleCorrect = {this.handleCorrect}
      handleWrong1 = {this.handleWrong1} handleWrong2 = {this.handleWrong2} localState={this.state}/>
      </div>
      

    )
    

  }
}

const mapStateToProps = (state) => {
  return {
    allbreeds: state.breeds.allbreeds,
    current: state.breeds.current,
    user: state.user
  }
}


export default connect (mapStateToProps, { getImage, getBreeds, setBreeds, addPoint })(DogPicsContainer)
