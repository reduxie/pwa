// import Display from './Display';
// import Hw from "../helloWorld";

// const App: React.FC<{}> = () => {
  //     return (
    //       <>
    //         <Hw />
    //         {/* <Display /> */}
    //       </>
    //     );
    // }
    // export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./../containers/ProfilePage";
import Homepage from "./../containers/HomePage";
import NavBar from "./NavBar";
import LoginPage from "./../containers/LoginPage"


const App: React.FC<{}> = () => {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={Homepage} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </Router>
  // <NavBar />
  );
  }

export default App;
