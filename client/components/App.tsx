import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from '../containers/ProfilePage';
import Homepage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';

const App: React.FC<{}> = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={Homepage} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </Router>
);

export default App;
