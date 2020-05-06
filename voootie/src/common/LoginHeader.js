import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    height: theme.spacing(7),
    backgroundColor: "#1f75ff",
  },
  title: {
    flexGrow: 1,
    paddingLeft: theme.spacing(5),
  },
}));

const LoginHeader = withRouter((props) => {
  const classes = useStyles();
  const handleMovePage = (page) => () => {
    props.history.push("/" + page);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar} elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Voootie
          </Typography>
          <Button color="inherit" onClick={handleMovePage("Home")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default LoginHeader;
