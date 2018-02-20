import React, { Component } from 'react';

class ChildComponent extends Component {
 
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}

export default ChildComponent;