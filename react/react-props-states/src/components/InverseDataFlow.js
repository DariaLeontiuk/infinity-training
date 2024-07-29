import React from "react";

  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: '' };
    }
  
    handleChange = (newValue) => {
      this.setState({ value: newValue });
    };
  
    render() {
      return (
        <div>
          <p> Parent Value: {this.state.value}</p>
          <ChildComponent value={this.state.value} onChange={this.handleChange} />
        </div>
      );
    }
  }
  
  function ChildComponent(props) {
    const handleInputChange = (event) => {
      props.onChange(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={props.value} onChange={handleInputChange} />
        <p>Child Value: {props.value}</p>
      </div>
    );
  }

  export default ParentComponent