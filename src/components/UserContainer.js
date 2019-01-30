import * as React from 'react'
import User from './User'
import { connect } from 'react-redux'

class UserContainer extends React.Component {

  addUser = (user) => {
    this.props.dispatch({
      type: 'ADD_USER',
      payload: {
        id: [],
        ...user
      }
    })
  }


  render() {
    return <User addUser={this.addUser} />
  }
}

// const mapStateToProps = (state) => {
//   return {
//     user: state
//   }
// }

export default connect()(UserContainer)