import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement() {
    console.log("increment clicked", this.state.count);
  }
  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        increment
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
          <button
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm"
          >
            increment
          </button>
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
