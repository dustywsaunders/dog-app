import * as React from 'react'
import { getImage } from '../actions/getImage'
import { setImage } from '../actions/setImage'
import { connect } from 'react-redux'
import Image from './Image'

class ImageContainer extends React.Component {

  componentDidMount() {
    this.props.getImage()
  }

  render() {
    // console.log(this.props);
    
    if (!this.props.image) return 'Loading...'
    return (
      <Image image = { this.props.image }/>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    image: state.image
  }
}

export default connect (mapStateToProps, { getImage, setImage })(ImageContainer)