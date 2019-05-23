import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

const styles: any = (theme: any) => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
});
interface IProps {}

const SimplePopover: React.FC<IProps> = (props: any) => {
  const classes: any = props;
  const anchorEl: any = false;
  const open = Boolean(true);

  return (
    <div>
      {/* <Button
          aria-owns={open ? 'simple-popper' : undefined}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handleClick}
        >
          Open Popover
        </Button> */}
      <Button
        onClick={() => {
          console.log('heeeeeeyoooo');
        }}
      >
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={props.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>
            The content of the Popover.
          </Typography>
        </Popover>
      </Button>
    </div>
  );
};

export default withStyles(styles)(SimplePopover);
