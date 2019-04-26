import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;
  const jobs = props.jobs;
  console.log(props)
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="overline" component="h3">
          <h3>{jobs[ 0 ].jobTitle}</h3>
        </Typography>
        <Typography variant="body2" component="p">
          {jobs[ 0 ].description}
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
