import * as React from 'react'
import { getBreeds } from '../actions/getBreeds'
import { setBreeds } from '../actions/setBreeds'
import { connect } from 'react-redux'
import DogPics from './DogPics'

class DogPicsContainer extends React.Component {

  componentDidMount() {
    this.props.getBreeds()
  }

  render() {    
    if (!this.props.allbreeds) return 'Loading...'
    return (
      <DogPics allbreeds = { this.props.allbreeds } current = { this.props.current }/>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    allbreeds: state.breeds.allbreeds,
    current: state.breeds.current
  }
}

export default connect (mapStateToProps, { getBreeds, setBreeds })(DogPicsContainer)