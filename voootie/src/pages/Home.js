import React from "react";
import CommonHeader from "./../common/CommonHeader";
import CommonFotter from "../common/CommonFotter";
import Search from "./../components/Home/Search";
import Questions from "./../components/Home/Questions";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e3e3e3",
  },
  titleContainer: {
    paddingTop: theme.spacing(5),
  },
  title: {
    fontWeight: "bold",
    color: "#2e2e2e",
  },
  subtitle: {
    color: "#2e2e2e",
  },
  content: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(10),
  },
}));

const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CommonHeader />
      <Grid container className={classes.titleContainer}>
        <Grid item xs={1} />
        <Grid item xs={11}>
          <Typography variant="h4" className={classes.title}>
            興味のある質問に投票しよう！
          </Typography>
          <Typography variant="body2" className={classes.subtitle}>
            質問結果は団体や他のユーザーに影響を与えます。慎重に答えましょう。
          </Typography>
        </Grid>
      </Grid>
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
