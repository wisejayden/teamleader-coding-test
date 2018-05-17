import React, { Component } from 'react';
import './App.css';

import Orders from './Orders.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Orders />
      </div>
    );
  }
}

export default App;
