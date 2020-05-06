import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import {
  MenuItem,
  Menu,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import RadioIcon from "@material-ui/icons/Radio";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    height: theme.spacing(7),
    backgroundColor: "#1f75ff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: theme.spacing(5),
  },
  list: {
    width: 250,
  },
  iconButton: {
    padding: 5,
  },
}));

const CommonHeader = withRouter((props) => {
  const classes = useStyles();
  const [anchorElMyMenu, setAnchorElMyMenu] = React.useState(null);
  const [anchorElNotification, setAnchorElNotification] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const openMyMenu = Boolean(anchorElMyMenu);
  const openNotification = Boolean(anchorElNotification);

  const handleOpenMyMenu = (event) => {
    setAnchorElMyMenu(event.currentTarget);
  };

  const handleCloseMyMenu = () => {
    setAnchorElMyMenu(null);
  };

  const handleOpenNotification = (event) => {
    setAnchorElNotification(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setAnchorElNotification(null);
  };

  const toggleDrawer = (bool) => () => {
    setOpenDrawer(bool);
  };

  const handleMovePage = (page) => () => {
    props.history.push("/" + page);
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem
          button
          key={"Discussion"}
          onClick={handleMovePage("Discussion")}
        >
          <ListItemIcon>
            <QuestionAnswerIcon />
          </ListItemIcon>
          <ListItemText primary={"Discussion"} />
        </ListItem>
        <ListItem
          button
          key={"Supporter"}
          onClick={handleMovePage("Supporter")}
        >
          <ListItemIcon>
            <EmojiPeopleIcon />
          </ListItemIcon>
          <ListItemText primary={"Supporter"} />
        </ListItem>
        <ListItem button key={"News"} onClick={handleMovePage("News")}>
          <ListItemIcon>
            <RadioIcon />
          </ListItemIcon>
          <ListItemText primary={"News"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"Contact"} onClick={handleMovePage("Contact")}>
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary={"Contact"} />
        </ListItem>
        <ListItem button key={"Sign Out"} onClick={handleMovePage("")}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={"Sign Out"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar} elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
            {sideList()}
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            Voootie
          </Typography>
          <div>
            <IconButton
              aria-label="notification"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNotification}
              color="inherit"
            >
              <NotificationsIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNotification}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openNotification}
              onClose={handleCloseNotification}
            >
              <MenuItem onClick={handleCloseNotification}>
                Notifications
              </MenuItem>
            </Menu>
          </div>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenMyMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElMyMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openMyMenu}
              onClose={handleCloseMyMenu}
            >
              <MenuItem onClick={handleCloseMyMenu}>Profile</MenuItem>
              <MenuItem onClick={handleCloseMyMenu}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default CommonHeader;
