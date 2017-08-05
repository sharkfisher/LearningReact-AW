import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// ES6 style class component
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld greetTarget="Batman" />
        <HelloWorld greetTarget="Iron Man" />
      </div>
    );
  }
}

// Functional component
const HelloWorld = (props) => (
  <p>Hello, {props.greetTarget}</p>
);
export default App;
