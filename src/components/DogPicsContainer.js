import * as React from 'react'
import * as request from 'superagent'
import DogPics from './DogPics'


export default class DogPicsContainer extends React.Component {
  state = {
    
  }

  componentDidMount() {
    request('https://dog.ceo/api/breeds/list/all')
      // .then(response => console.log(response.body.message))
      .then(response => this.setState(response.body.message))
  }

  render() {
    if (!this.state) return 'Loading...'
    return (
    <h1>we have {this.state.length} dogs</h1>
    // <DogPics dogs={this.state.dogs} />
    )

  }
}