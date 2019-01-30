import * as React from 'react'
import { getBreeds } from '../actions/getBreeds'
import { setBreeds } from '../actions/setBreeds'
import { addPoint } from '../actions/addPoint'
import { connect } from 'react-redux'
import DogPics from './DogPics'
import User from './User'


class DogPicsContainer extends React.Component {
  state = {
    backgroundColor1: 'rgb(144, 191, 231)',
    backgroundColor2: 'rgb(144, 191, 231)',
    backgroundColor3: 'rgb(144, 191, 231)'
    }

  handleCorrect = () => {
    console.log('Correct!')
    this.setState({backgroundColor1: 'green'})
    // this.props.addPoint()

  }

  handleWrong1 = () => {
    console.log('Wrong')
    this.setState({backgroundColor2: 'red'})
  }

  handleWrong2 = () => {
    console.log('Wrong')
    this.setState({backgroundColor3: 'red'})
  }

  componentDidMount() {
    this.props.getBreeds()
  }


  render() {
    // console.log(this.props);
    if (!this.props.breeds) return 'Loading...'
    return (
      <div>
      <DogPics breeds = { this.props.breeds } handleCorrect = {this.handleCorrect}
      handleWrong1 = {this.handleWrong1} handleWrong2 = {this.handleWrong2} localState={this.state}/>
      </div>
    )
    

  }
}

const mapStateToProps = (state) => {
  return {
    breeds: state.breeds,
    user: state.user
  }
}

export default connect (mapStateToProps, { getBreeds, setBreeds, addPoint, User})(DogPicsContainer)