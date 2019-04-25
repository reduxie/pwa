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
  const description = props.jobsArray[ 0 ].description;
  const jobTitle = props.jobsArray[ 0 ].jobTitle;
  return (
    <div>
      <Paper
        className={classes.root}
        elevation={1}
        description={description}
      >
        <Typography variant="overline" component="h3">
          <h3>{jobTitle}</h3>
        </Typography>
        <Typography
          variant="body2"
          component="p">
          {description}
          Paper can be used to build surface or other elements for your application.
          Paper can be used to build surface or other elements for your application.
          Paper can be used to build surface or other elements for your application.
          Paper can be used to build surface or other elements for your application.
          Paper can be used to build surface or other elements for your application.
          Paper can be used to build surface or other elements for your application.
          Paper can be used to build surface or other elements for your application.
          Paper can be used to build surface or other elements for your application.
          Paper can be used to build surface or other elements for your application.
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
