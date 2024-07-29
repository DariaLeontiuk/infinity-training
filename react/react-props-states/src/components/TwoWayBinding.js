import React from "react";

class TwoWayBindingComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: '' };
    }
  
    handleChange = (event) => {
      this.setState({ value: event.target.value });
    };
  
    render() {
      return (
        <div>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <p>Input Value: {this.state.value}</p>
        </div>
      );
    }
  }

  export default TwoWayBindingComponent