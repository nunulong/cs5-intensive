import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.child.name}</h1>
        <p>{this.props.child.age}</p>
      </div>
    );
  }
}

export default Child;