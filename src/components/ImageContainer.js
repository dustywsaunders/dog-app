import * as React from 'react'
import { getImage } from '../actions/getImage'
import { setImage } from '../actions/setImage'
import { connect } from 'react-redux'
import Image from './Image'

class ImageContainer extends React.Component {

  componentDidMount() {
    // console.log(this.props.current);
    
    // const current = this.props.current

    setTimeout(() => {
      const current = this.props.current

      this.props.getImage(current)
    
    }, 50)

    // this.props.getImage(current)
  }

  // componentDidMount() {
  //   const propsCopy = this.props;
  //   this.props.setFilter({ location: 1 });
  //   console.log("before", this.props === propsCopy);
  //   setTimeout(() => { console.log("after", this.props === propsCopy) }, 0);
  // }

  render() {
    // console.log(this.props);
    
    if (!this.props.image) return 'Loading...'
    return (
      <Image image = { this.props.image }/>
    )

  }
}

const mapStateToProps = (state) => {
  console.log(state.breeds.current);
  
  return {
    image: state.image,
    current: state.breeds.current
  }
}

export default connect (mapStateToProps, { getImage, setImage })(ImageContainer)