import React, { Component } from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent/FirstComponent';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstComponent />
        <FunctionalComponent />
      </div>
    );
  }
}

export default App;
