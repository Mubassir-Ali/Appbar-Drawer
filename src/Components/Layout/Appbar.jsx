import React, { Fragment, useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Divider } from '@material-ui/core';
import { Typography, makeStyles } from '@material-ui/core';
import { List, ListItem, ListItemText, SwipeableDrawer } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import cx from 'classname';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyle = makeStyles((theme) => ({
	more: {
		display: 'flex',
		
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	},
	logo: {
		flexGrow: 1
	},
	menu: {
		display: 'flex',
		flexGrow: 1
	},
	sectionMobile: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'flex'
		}
	},
	active:{
		color:theme.palette.warning.main

	},
	drawer: {
		width: 250
	},
	appbarColor:{
		backgroundColor:theme.palette.grey.A400
	},

}

));

const Appbar = () => {
	const classes = useStyle();

	const [ anchorEl, setAnchorEl ] = useState(null);
	const [ open, setOpen ] = useState(null);

	const drawerOpen = (event) => {
		setOpen(event.currentTarget);
	};

	const drawerClose = () => {
		setOpen(null);
	};

	return (
		<Fragment>
			<AppBar className={classes.appbarColor}>
				<Toolbar>
					<Typography variant="h6" className={classes.logo}>
						Food Street
					</Typography>
					<div className={cx(classes.sectionMobile, classes.menu)}>
						<Button color="inherit" fullWidth component={NavLink} to="/" exact activeClassName={classes.active} >
							Coffee
						</Button>
						<Button color="inherit" fullWidth component={NavLink}  to="/desert" exact activeClassName={classes.active} >
							Desert
						</Button>
						<Button color="inherit" fullWidth component={NavLink}  to="/healthy" exact activeClassName={classes.active} >
							Healthy
						</Button>
						<Button color="inherit" fullWidth component={NavLink}  to="/meat" exact activeClassName={classes.active} >
							Meat
						</Button>
						<Button color="inherit" fullWidth component={NavLink}  to="/pizza" exact activeClassName={classes.active}>
							Pizza
						</Button>
					</div>

					<div >
					<IconButton edge="end" color="inherit" className={cx(classes.more)} onClick={drawerOpen}>
						<MoreVertIcon />
					</IconButton>

					</div>

					
				</Toolbar>
			</AppBar>

			<SwipeableDrawer open={open} onClose={drawerClose}>
				<List disablePadding className={classes.drawer}>
					<Toolbar />
					<Divider />

					<ListItem button onClick={drawerClose} component={NavLink}  to="/">
						<ListItemText primary="Coffee" />
					</ListItem>

					<ListItem button onClick={drawerClose} component={NavLink}  to="/desert">
						<ListItemText primary="Desert" />
					</ListItem>

					<ListItem button onClick={drawerClose} component={NavLink}  to="/healthy">
						<ListItemText primary="Healthy" />
					</ListItem>

					<ListItem button onClick={drawerClose} component={NavLink}  to="/meat">
						<ListItemText primary="Meat" />
					</ListItem>

					<ListItem button onClick={drawerClose} component={NavLink}  to="/pizza">
						<ListItemText primary="Pizza" />
					</ListItem>
				</List>
			</SwipeableDrawer>
		</Fragment>
	);
};

export default Appbar;
