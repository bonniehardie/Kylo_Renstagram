import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    height: '100px',
    width: '100px',
  },

}));

const Square = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} >
      <img src={props.photoUrl} />
    </Paper>
  );
};

export default Square;
