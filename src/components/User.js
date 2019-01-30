import * as React from 'react'
import { connect } from 'react-redux'
import {addUser} from '../actions/addUser'


class User extends React.Component {

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // console.log('imma state from user', this.state)
    if (this.state.name) {
      this.props.addUser(this.state.name)
      console.log('imma state from user', this.state.name)
    }
  }

  render() {
    return (<div>
      <h2>Add a user</h2>

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    name: state
  }
}

export default connect (mapStateToProps, { addUser, User })(User)
