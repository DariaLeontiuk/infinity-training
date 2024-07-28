import React, {Component} from "react";

class ColorChanger extends Component {
    constructor(props) {
      super(props);
      this.state = {
        backgroundColor: this.getRandomColor()
      };
      this.changeColor = this.changeColor.bind(this);
      console.log('Color Constructor');
    }
  
    componentDidMount() {
      console.log('Color Component did mount');
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Color Should component update');
      return true;
    }
  
    componentDidUpdate(prevProps, prevState) {
      console.log('Color Component did update');
    }
  
    componentWillUnmount() {
      console.log('Color Component will unmount');
    }
  
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    changeColor() {
      this.setState({ backgroundColor: this.getRandomColor() });
    }
  
    render() {
      console.log('Color Render');
      const { backgroundColor } = this.state;
      const style = { backgroundColor, padding: '20px', textAlign: 'center' };
  
      return (
        <div style={style}>
          <h1>Random Background Color</h1>
          <button onClick={this.changeColor}>Change Color</button>
        </div>
      );
    }
  }

export default ColorChanger