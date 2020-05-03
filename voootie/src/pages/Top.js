import React from "react";
import LoginHeader from "../common/LoginHeader";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import org from "./../assets/org.svg";
import arrow from "./../assets/arrow.svg";
import people from "./../assets/people.svg";

const useStyle = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#245736",
    // background: "linear-gradient(100deg, #00ffd9 20%, #00c8ff 90%)",
    background: "linear-gradient(100deg, #007564 20%, #002975 90%)",
  },
  title: {
    textAlign: "center",
    paddingTop: theme.spacing(2),
    fontWeight: "bold",
    color: "#ffffff",
  },
  images: {
    textAlign: "center",
    padding: "40px 0",
  },
  arrow: {
    padding: "0 100px",
  },
}));

function Top() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <LoginHeader />
      <Box className={classes.title}>
        <Typography variant="h1" className={classes.title}>
          あなたの一票が
          <br />
          社会を変える
        </Typography>
      </Box>
      <Box className={classes.images}>
        <img
          src={org}
          width="120"
          height="120"
          alt="organization"
          fill="#24664b"
        />
        <img
          src={arrow}
          width="120"
          height="120"
          alt="arrow"
          className={classes.arrow}
        />
        <img src={people} width="120" height="120" alt="people" />
      </Box>
    </div>
  );
}

export default Top;
