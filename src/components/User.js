import * as React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/addUser'


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
    if (this.state.name) {
      this.props.addUser(this.state.name)
    }
  }

  render() {
    if (!this.props.user.firstName) return (<div>    
      <h2>Hi, what's your name?</h2>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
    
    return (
      <h2>Hi, {this.props.user.firstName}</h2>
   )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect (mapStateToProps, { addUser })(User)