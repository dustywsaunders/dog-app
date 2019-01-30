import * as React from 'react'
import { getBreeds } from '../actions/getBreeds'
import { getImage } from '../actions/getImage'
import { setBreeds } from '../actions/setBreeds'
import { addPoint } from '../actions/addPoint'
import { connect } from 'react-redux'
import DogPics from './DogPics'
import User from './User'


const arr = []
while(arr.length < 3){
var r = Math.floor(Math.random()*10);
if(arr.indexOf(r) === -1) arr.push(r);
}
const arr1 = []
while(arr1.length < 3){
var s = Math.floor(Math.random()*10);
if(arr1.indexOf(s) === -1) arr1.push(s);
}

const orderButton = []
while(orderButton.length <= 2){
    var q = Math.floor(Math.random()*3);
    if(orderButton.indexOf(q) === -1) orderButton.push(q);
} 
const orderButton1 = []
while(orderButton1.length <= 2){
    var o = Math.floor(Math.random()*3);
    if(orderButton1.indexOf(o) === -1) orderButton1.push(o);
} 

class DogPicsContainer extends React.Component {
  state = {
    backgroundColor1: 'rgb(144, 191, 231)',
    backgroundColor2: 'rgb(144, 191, 231)',
    backgroundColor3: 'rgb(144, 191, 231)',
    dogName: arr,
    buttonOrder: orderButton
    }

  handleCorrect = () => {
    this.setState({backgroundColor1: 'green'})
    setTimeout(() => {
      this.props.getBreeds()
      setTimeout(() => {
        this.setState({dogName: arr ? arr1 : arr,
          buttonOrder: orderButton ? orderButton1 : orderButton})
        const current = this.props.current
        this.props.getImage(current)
      }, 50)
      this.resetButton()
      
    }, 2000)    
  }

  handleWrong1 = () => {
    console.log('Wrong')
    this.setState({backgroundColor2: 'red'})
  }

  handleWrong2 = () => {
    console.log('Wrong')
    this.setState({backgroundColor3: 'red'})
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
  }

  render() {
    console.log(this.state.dogName)
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

export default connect (mapStateToProps, { getImage, getBreeds, setBreeds, addPoint, User})(DogPicsContainer)