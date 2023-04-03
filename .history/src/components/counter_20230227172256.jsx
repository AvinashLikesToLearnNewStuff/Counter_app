import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    //we add a tag array and make 3 elements in it
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">increment</button>
        {/* //we want to render the tags using ul and li tags */}
        <ul>
          <li>
            {/* //in jsx expressions we dont have the concept of loops because jsx is a simple syntax that gets compiled to react */}
            {/* so we will use the map method to render our list of items */}
            {this.state.tags.map((tag) => (
              <li>{tag}</li>
            ))}
            {/* we grab the tags array and map each tag, each tag goes to a list item  */}
          </li>
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    //when we have count as 0 we want to add warning class
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
