import React from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(5),
  },
  org: {},
  orgName: {
    marginTop: theme.spacing(0.6),
    marginLeft: theme.spacing(2),
  },
  title: {
    paddingTop: theme.spacing(2),
  },
  period: {
    paddingTop: theme.spacing(1),
  },
}));

const VoteTitle = () => {
  const classes = useStyle();
  return (
    <Paper elevation={0} className={classes.root} square>
      <Box display="flex" className={classes.org}>
        <Avatar>
          <WorkIcon />
        </Avatar>
        <Typography variant="h6" className={classes.orgName}>
          経済産業省
        </Typography>
      </Box>
      <Typography variant="h5" className={classes.title}>
        新型コロナの家計への影響調査
      </Typography>
      <Typography variant="body2" className={classes.period}>
        2020/04/06 - 2020/05/06
      </Typography>
    </Paper>
  );
};

export default VoteTitle;
