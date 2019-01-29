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
    if (!this.props.breeds) return 'Loading...'
    return (
      <DogPics breeds = { this.props.breeds }/>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    breeds: state.breeds
  }
}

export default connect (mapStateToProps, { getBreeds, setBreeds })(DogPicsContainer)