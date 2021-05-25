import React, { Component } from 'react';
import NavBar from './common/navbar';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 2 },
    ]
  }
  render() {
    return (
      <NavBar totalCounters={this.state.counters.length} />
    );
  }
}

export default App;
