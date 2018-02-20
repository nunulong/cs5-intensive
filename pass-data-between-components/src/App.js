import React, { Component } from 'react';
import ChildComponent from './components/ChildComponent/ChildComponent';
import './App.css';

class App extends Component {
  render() {
    const name = 'Ting';
    return (
      <div className="App">
        <ChildComponent name={name} />
      </div>
    );
  }
}

export default App;
