import React, { Component } from "react";

class Counter extends Component {
  render() {
    state = {
      count: 0,
    };

    return (
      <React.Fragment>
        <span>{this.state.count}</span>
        <button>increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
