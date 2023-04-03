import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>there are no tags</p>;
    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }
  render() {
    return (
      <div>
{(this.state.tags.length === 0) &&  "please set a tag" )} 
        <ul>{this.renderTags()}</ul>
      </div>
    );
  }
}

export default Counter;
