import React, { Component } from 'react';
import Display from './Display';
import Hw from '../helloWorld.tsx';

class App extends Component {
  render() {
    return (
      <div>
        <Hw />
        <Display />
      </div>
    );
  }
}

export default App;
