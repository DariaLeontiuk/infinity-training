import React, { Component } from 'react';

class InputFocus extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <input type="text" ref={this.inputRef} placeholder="Focus on load" />
    );
  }
}

export default InputFocus;