import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  renderTags() {
    if (this.state.tags === 0) return <p>there are not tags</p>;
    return;
    {
      this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
    }
  }
  render() {
    return (
      <div>
        <ul>{this.renderTags()}</ul>
      </div>
    );
  }
}

export default Counter;
