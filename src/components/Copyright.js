import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      color: "white",
  }
}));
function Copyright() {
  const classes = useStyles();
    return (
      <div className={classes.root}>
      <Typography variant="body2" color="white" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://badgered.net/">
          badgered.net
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </div>
    );
  }

  export default Copyright