import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { makeStyles, AppBar } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";

const useStyle = makeStyles((theme) => ({
  list: {
    width: "100%",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Questions = withRouter((props) => {
  const classes = useStyle();
  const [tab, setTab] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };
  const handleMovePage = (page) => () => {
    props.history.push("/" + page);
  };

  return (
    <Paper elevation={0} square>
      <AppBar position="static" color="default" elevation={0}>
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="集計中" {...a11yProps(0)} />
          <Tab label="集計終了" {...a11yProps(1)} />
          <Tab label="投票済" {...a11yProps(2)} />
          <Tab label="全て" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        <List className={classes.root}>
          <ListItemLink>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="新型コロナの家計への影響調査"
              secondary="残り100サンプル"
              onClick={handleMovePage("Vote/voteid")}
            />
          </ListItemLink>
          <ListItemLink>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="ハンバーガー復活！"
              secondary="残り512サンプル"
            />
          </ListItemLink>
        </List>
      </TabPanel>
      <TabPanel value={tab} index={1}></TabPanel>
      <TabPanel value={tab} index={2}>
        <List className={classes.root}></List>
      </TabPanel>
      <TabPanel value={tab} index={3}>
        <List className={classes.root}></List>
      </TabPanel>
    </Paper>
  );
});

export default Questions;
