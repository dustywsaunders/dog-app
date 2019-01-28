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
    if (!this.state.albums) return 'Loading...'
    return <DogPics dogs={this.state.dogs} />
  }
}