import React, { Component } from 'react';
import './App.css';
import Child from './components/Child';

class App extends Component {
  constructor() {
    super();
    this.state = {
      children: [
        {name: 'one', age:'two'},
        {name: 'a', age: 'three'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.children.map(child => <Child key={child.name} child={child}/>)}
      </div>
    );
  }
}

export default App;
