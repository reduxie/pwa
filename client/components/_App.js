import React, { Component } from 'react';
// import Row from './Row';
// import GameList from './GameList';
// import Leaders from './Leaders';
import Navbar from './Navbar';
import AppBar from './AppBar';



class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AppBar />
        <Navbar state={state} />
      </div>
    );
  }
}


export default App;
