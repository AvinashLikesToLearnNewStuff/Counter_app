import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <span>{2 + 2}</span>
        <button>increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
