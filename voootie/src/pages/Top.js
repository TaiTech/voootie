import org from "./../assets/org.svg";
import arrow from "./../assets/arrow.svg";
import people from "./../assets/people.svg";
import React from "react";
import LoginHeader from "../common/LoginHeader";
import CommonFotter from "../common/CommonFotter";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const useStyle = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#245736",
    background: "linear-gradient(100deg, #00ffd9 20%, #00c8ff 90%)",
    // background: "linear-gradient(100deg, #007564 20%, #002975 90%)",
  },
  copyBox: {
    textAlign: "center",
    paddingTop: theme.spacing(2),
  },
  copy: {
    fontWeight: "bold",
    color: "#ffffff",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(5),
  },
  images: {
    textAlign: "center",
    paddingBottom: theme.spacing(8),
  },
  arrow: {
    padding: "0 100px",
  },
  descriptionContainer: {},
  descriptionPaper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
}));

const Top = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <LoginHeader />
      <Box className={classes.copyBox}>
        <Typography variant="h1" className={classes.copy}>
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
      <Grid container spacing={1} className={classes.descriptionContainer}>
        <Grid item xs={1} />
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.descriptionPaper}>
            <Typography variant="h5">Voootieとは</Typography>
            <Divider variant="middle" />
            <Typography variant="body1">
              Voootieは団体と国民を結ぶ国内最大級の投票型プラットフォームです。
            </Typography>
          </Paper>
          <Paper elevation={0} className={classes.descriptionPaper}>
            <Typography variant="h5">Voootieの理念</Typography>
            <Divider variant="middle" />
            <Typography variant="body1">
              企業の経済活動や自治体の運営と国民のニーズをマッチさせ、より良い社会を目指します。
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0} className={classes.descriptionPaper}>
            <Typography variant="h5">Voootieでできること</Typography>
            <Divider variant="middle" />
            <Typography variant="body1">
              Voootieでは団体が投票を開き、ユーザーがそれに投票することができます。
              また、ユーザーはコメントをすることで自らの意思を団体に伝えることができます。
              団体は得られたデータを元に今後の活動をよりユーザー指向に改善します。
              このサイクルを活発に繰り返すことで、団体とユーザーが共に利益を得ることができます。
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <CommonFotter />
    </div>
  );
};

export default Top;
