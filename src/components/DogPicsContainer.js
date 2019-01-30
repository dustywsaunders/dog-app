import * as React from 'react'
import { getBreeds } from '../actions/getBreeds'
import { setBreeds } from '../actions/setBreeds'
import { connect } from 'react-redux'
import DogPics from './DogPics'




class DogPicsContainer extends React.Component {
  state = {
    backgroundColor1: 'rgb(144, 191, 231)',
    backgroundColor2: 'rgb(144, 191, 231)',
    backgroundColor3: 'rgb(144, 191, 231)'
    }
  
//   getImages () {
//     request(`https://dog.ceo/api/breed/${Object.keys(this.state.breeds)[random]}/images`)
//     // .then(response => this.setState(Object.keys(this.state)[2]['images'][response]))

//     // .then(response => Object.keys(this.state)[2][response])
//     .then(data => this.updateImages(data.body.message))
//     .catch(console.error)
//   }

// updateImages(images) {
//   this.setState({ img: images })

// this.setState({ img: images })


  
  // componentDidMount() {
  //   request('https://dog.ceo/api/breeds/list/all')
  //     // .then(response => console.log(response.body.message))
  //     .then(response => this.updateBreeds(response.body.message))
  //     // .then(it => console.log(it))
  //     .then(()=>this.getImages())
  // }

  // updateBreeds(breed) {
  //   this.setState({ breeds: breed })
  // }
  
  // this.setState({ img: images })


  handleCorrect = () => {
    console.log('Correct!')
    this.setState({backgroundColor1: 'green'})
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
    breeds: state
  }
}

export default connect (mapStateToProps, { getBreeds, setBreeds })(DogPicsContainer)