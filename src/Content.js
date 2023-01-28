import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  erorshowfun = () => {
    this.setState({ hasError: true });
  };
  render() {
    if(this.state.hasError){
     throw new Error(" Website was crashed")
    }
    return (
      <div style={{ width: "40%", margin: "10px auto" }}>
        <h2> Content Page</h2>
        <button onClick={this.erorshowfun}> Show Error</button>
      </div>
    );
  }
}
