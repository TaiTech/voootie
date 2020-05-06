import React from "react";
import CommonHeader from "./../common/CommonHeader";
import CommonFotter from "./../common/CommonFotter";
import VoteTitle from "./../components/Vote/VoteTitle";
import OrgInfo from "./../components/Vote/OrgInfo";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e3e3e3",
  },
  container: {
    paddingTop: theme.spacing(5),
  },
}));

const Vote = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CommonHeader />
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <VoteTitle />
        </Grid>
        <Grid item xs={4}>
          <OrgInfo />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <CommonFotter />
    </div>
  );
};

export default Vote;
