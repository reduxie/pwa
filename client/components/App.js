import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <Display />
      </div>
    );
  }
}

export default App;
