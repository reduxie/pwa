import React from 'react';
// import Avatar from './Avatar';
// import SearchBar from './SearchBar';
// import Paper from '@material-ui/core/Paper';
// import RaisedButton from '@material-ui/core/RaisedButton';
import List from '@material-ui/core/List';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const Navbar = (props) => {
  const { turn } = props;
  return (
    <div >
      <h1>
        <List>
          <ListItemSecondaryAction>
            <ListItemText
              primary="line item"
              secondary="secondary text"
            />
          </ListItemSecondaryAction>
        </List>
        {turn}
        Or this?
      </h1>
    </div>
  )
}

export default Navbar;