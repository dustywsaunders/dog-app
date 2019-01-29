import * as React from 'react'
import * as request from 'superagent'
import DogPics from './DogPics'

const random = Math.floor(Math.random() * 87)


export default class DogPicsContainer extends React.Component {
  state = {
    img: [],
    breeds: {}
    }
  
  getImages () {
    request(`https://dog.ceo/api/breed/${Object.keys(this.state.breeds)[random]}/images`)
    // .then(response => this.setState(Object.keys(this.state)[2]['images'][response]))

    // .then(response => Object.keys(this.state)[2][response])
    .then(data => this.updateImages(data.body.message))
    .catch(console.error)
  }

updateImages(images) {
  this.setState({ img: images })

// this.setState({ img: images })

}
  

  componentDidMount() {
    request('https://dog.ceo/api/breeds/list/all')
      // .then(response => console.log(response.body.message))
      .then(response => this.updateBreeds(response.body.message))
      // .then(it => console.log(it))
      .then(()=>this.getImages())
  }

  updateBreeds(breed) {
    this.setState({ breeds: breed })
  
  // this.setState({ img: images })
  
  }


  render() {
    console.log(this.state)
    if (!this.state) return 'Loading...'
    return (
      <div>
    <h1>we have {Object.keys(this.state.breeds).length} breeds</h1>
    <h2>Is this {Object.keys(this.state.breeds)[random]}?</h2>
    <h2>Is this {Object.keys(this.state.breeds)[Math.floor(Math.random() * 87)]}?</h2>
    <h2>Is this {Object.keys(this.state.breeds)[Math.floor(Math.random() * 87)]}?</h2>
    {/* <img src='https://images.dog.ceo/breeds/airedale/n02096051_1111.jpg' alt='img'></img> */}
    <img src={this.state.img[Math.floor(Math.random()*this.state.img.length)]} alt='img'></img>
    {/* <h2>THis is {Object.keys(this.state)[Math.floor(Math.random() * 87)]}</h2> */}

    {/* <DogPics dogs={this.state.dogs} /> */}
    </div>
    )

  }
}