import React, { Component } from "react";

export default class Erroboundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    if (this.state.errorInfo) {
      return (
        <div style={{ width: "50%", margin: "15px auto" }}>
          <h2 style={{ color: "green" }}>
            Server is down working on backend side
          </h2>
        </div>
      );
    }
    return this.props.children;
  }
}
