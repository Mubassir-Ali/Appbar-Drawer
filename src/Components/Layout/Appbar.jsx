import React, { Fragment, useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Divider } from '@material-ui/core';
import { Typography, makeStyles } from '@material-ui/core';
import { List, ListItem, ListItemText, SwipeableDrawer } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
	drawer: {
		width: 250
	},
	appbarColor:{
		backgroundColor:theme.palette.grey.A400
	},
	mobileMenuColor:theme.palette.primary
}));

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
						<Button color="inherit" fullWidth component={Link} to="/">
							Coffee
						</Button>
						<Button color="inherit" fullWidth component={Link} to="/desert">
							Desert
						</Button>
						<Button color="inherit" fullWidth component={Link} to="/healthy">
							Healthy
						</Button>
						<Button color="inherit" fullWidth component={Link} to="/meat">
							Meat
						</Button>
						<Button color="inherit" fullWidth component={Link} to="/pizza">
							Pizza
						</Button>
					</div>

					<IconButton edge="end" color="inherit" className={cx(classes.more)} onClick={drawerOpen}>
						<MoreVertIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			<SwipeableDrawer open={open} onClose={drawerClose} className={classes.mobileMenuColor}>
				<List disablePadding className={classes.drawer}>
					<Toolbar />
					<Divider />

					<ListItem button onClick={drawerClose} component={Link} to="/">
						<ListItemText primary="Coffee" />
					</ListItem>

					<ListItem button onClick={drawerClose} component={Link} to="/desert">
						<ListItemText primary="Desert" />
					</ListItem>

					<ListItem button onClick={drawerClose} component={Link} to="/healthy">
						<ListItemText primary="Healthy" />
					</ListItem>

					<ListItem button onClick={drawerClose} component={Link} to="/meat">
						<ListItemText primary="Meat" />
					</ListItem>

					<ListItem button onClick={drawerClose} component={Link} to="/pizza">
						<ListItemText primary="Pizza" />
					</ListItem>
				</List>
			</SwipeableDrawer>
		</Fragment>
	);
};

export default Appbar;
