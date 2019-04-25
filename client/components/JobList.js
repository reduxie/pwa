import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const styles = theme => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class CheckboxList extends React.Component {
  state = {
    checked: [ 0 ] //all checked list items,

  };

  getLink = value => () => {
    // const { link } =
  }


  // handleToggle = value => () => {
  //   const { checked } = this.state;
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [ ...checked ];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   this.setState({
  //     checked: newChecked,
  //   });
  // };
  render() {
    const jobsArray = this.props.jobsArray
    const { classes } = this.props;
    // const j1 = this.props.jobsArray[ 0 ].jobTitle;
    // const j2 = this.props.jobsArray[ 1 ].jobTitle;
    return (
      <List className={classes.root}>
        {jobsArray.map(value => (
          <ListItem
            key={value}
            role={undefined}
            dense
            button
            onClick={this.props.handleToggle(value)}>
            <Checkbox
              checked={this.props.checked.indexOf(value) !== -1}
              tabIndex={-1}
            // disableRipple
            />
            <ListItemText
              primary={`${value.jobTitle}`}
              secondary={`${value.companyTitle}`}
            />

            <ListItemSecondaryAction>
              <IconButton
                aria-label="Comments">
                {/* <CommentIcon /> */}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);