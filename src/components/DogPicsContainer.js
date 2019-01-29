import * as React from 'react'
import { getBreeds } from '../actions/getBreeds'
import { setBreeds } from '../actions/setBreeds'
import { connect } from 'react-redux'
import DogPics from './DogPics'




class DogPicsContainer extends React.Component {
  // state = {
  //   img: [],
  //   breeds: {}
  //   }
  
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

  // handleOncClick() {
  //   console.log('click')
  // }
  

  componentDidMount() {
    this.props.getBreeds()
  }




  render() {
    console.log(this.props);
    
    if (!this.props.breeds) return 'Loading...'
    return (
      <DogPics breeds = { this.props.breeds }/>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    breeds: state
  }
}

export default connect (mapStateToProps, { getBreeds, setBreeds })(DogPicsContainer)