import * as React from 'react'
import { getImage } from '../actions/getImage'
import { connect } from 'react-redux'
import Image from './Image'

class ImageContainer extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const current = this.props.current
      this.props.getImage(current)
    }, 50)
  }

  render() {
    if (!this.props.image) return 'Loading...'
    return (
      <Image image = { this.props.image }/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    image: state.image,
    current: state.breeds.current
  }
}

export default connect (mapStateToProps, { getImage })(ImageContainer)