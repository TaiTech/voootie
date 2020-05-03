import React from "react";
import CommonHeader from "./../common/CommonHeader";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#2c6340",
  },
}));

function Home() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CommonHeader />
    </div>
  );
}

export default Home;
