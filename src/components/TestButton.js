import * as React from 'react'


export default class Test extends React.Component {
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  // change code above this line
  handleKeyPress(event) {
    if (event.keyCode === 37) {
      console.log('you pressed left');
    }
    else if (event.keyCode === 40) {
      console.log('you pressed down');
    }
    else if (event.keyCode === 39) {
      console.log('you pressed right');
    }
  }  
  render() {
    return(
    <div>
    </div>
    )
  }
}


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  // change code above this line
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      console.log('you pressed enter');
    }
  }
  render() {
    return (
      <div>
      </div>
    );
  }
};
 

