import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };

  render() {
    //the primary classes we want to have in all cases.
    let classes = "badge m-2 badge-";
    //when we have count as 0 we want to add warning class
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
