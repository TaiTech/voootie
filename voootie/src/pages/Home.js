import React from "react";
import CommonHeader from "./../common/CommonHeader";
import CommonFotter from "../common/CommonFotter";
import Search from "./../components/Home/Search";
import Questions from "./../components/Home/Questions";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e3e3e3",
  },
  content: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
  },
}));

const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CommonHeader />
      <Grid container spacing={2} className={classes.content}>
        <Grid item xs={1} />
        <Grid item xs={3}>
          <Search />
        </Grid>
        <Grid item xs={7}>
          <Questions />
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <CommonFotter />
    </div>
  );
};

export default Home;
