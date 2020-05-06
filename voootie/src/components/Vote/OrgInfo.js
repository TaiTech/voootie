import React from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
  },
  orgName: {
    marginTop: theme.spacing(0.6),
    marginLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
}));

const OrgInfo = () => {
  const classes = useStyle();
  return (
    <Paper elevation={0} square className={classes.root}>
      <Typography variant="body1" className={classes.orgName}>
        経済産業省
      </Typography>
      <Divider variant="middle" />
    </Paper>
  );
};

export default OrgInfo;
