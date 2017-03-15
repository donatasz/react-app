import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti enim maiores nesciunt, perferendis qui.
        </p>
      </div>
    );
  }
}

export default App;
