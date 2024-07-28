import React from "react";

class MyComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { data: null};
        console.log("Constructor")
    }

    componentDidMount(){
        console.log("Component did mount");
        setTimeout(() => {
            this.setState({data: "Hello, world!"});
        }, 1000);
    }

    render(){
        console.log("Render")
        return <div>{this.state.data}</div>
    }
}

export default MyComponent
