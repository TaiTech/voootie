import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    height: theme.spacing(20),
    backgroundColor: "#2e2e2e",
    textAlign: "center",
  },
  text: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
  },
}));

const CommonFotter = withRouter((props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Typography variant="h6" className={classes.text}>
          @one0one株式会社
        </Typography>
      </AppBar>
    </div>
  );
});

export default CommonFotter;
