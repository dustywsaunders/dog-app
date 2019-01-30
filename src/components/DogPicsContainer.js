import * as React from 'react'
import { getBreeds } from '../actions/getBreeds'
import { getImage } from '../actions/getImage'
import { setBreeds } from '../actions/setBreeds'
import { addPoint } from '../actions/addPoint'
import { connect } from 'react-redux'
import DogPics from './DogPics'
import User from './User'

function changeDogName(){
const arr = []
while(arr.length < 3){
var r = Math.floor(Math.random()*3);
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
    this.setState({backgroundColor1: 'green'})
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

    this.setState({backgroundColor2: 'red'})
    this.setState({backgroundColor3: 'red'})

    this.setState({backgroundColor1: 'green'})
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
    this.setState({backgroundColor2: 'red'})
    this.setState({backgroundColor3: 'red'})

    this.setState({backgroundColor1: 'green'})
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

export default connect (mapStateToProps, { getImage, getBreeds, setBreeds, addPoint, User})(DogPicsContainer)