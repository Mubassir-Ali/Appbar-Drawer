import React, { Fragment, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Divider,
} from "@material-ui/core";
import { Typography, makeStyles } from "@material-ui/core";
import { Menu, MenuItem, Drawer } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import cx from "classname";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyle = makeStyles((theme) => ({
  more: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logo: {
    flexGrow: 1,
  },
  menu: {
    display: "flex",
    flexGrow: 1.5,
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  drawer: {
    width: 250,
  },
}));

const Appbar = () => {
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(null);

  const drawerOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const drawerClose = () => {
    setOpen(null);
  };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const mobileMenu = (
  //   <Menu
  //     id="simple-menu"
  //     keepMounted
  //     anchorEl={anchorEl}
  //     open={Boolean(anchorEl)}
  //     onClose={handleClose}
  //   >
  //     <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
  //     <MenuItem onClick={handleClose} component={Link} to="/about">About</MenuItem>
  //     <MenuItem onClick={handleClose} component={Link} to="/contact">Contact</MenuItem>
  //   </Menu>
  // );

  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.logo}>
            Food Street
          </Typography>
          <div className={cx(classes.sectionMobile, classes.menu)}>
            <Button color="inherit" fullWidth>
              Home
            </Button>
            <Button color="inherit" fullWidth>
              Contact
            </Button>
            <Button color="inherit" fullWidth>
              About
            </Button>
          </div>

          <IconButton
            edge="end"
            color="inherit"
            className={cx(classes.more)}
            onClick={drawerOpen}
          >
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer open={open} onClose={drawerClose}>
        <List disablePadding className={classes.drawer}>
          <Toolbar />
          <Divider />

          <ListItem button onClick={drawerClose} component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button onClick={drawerClose} component={Link} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>

          <ListItem button onClick={drawerClose} component={Link} to="/about">
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </Fragment>
  );
};

export default Appbar;
