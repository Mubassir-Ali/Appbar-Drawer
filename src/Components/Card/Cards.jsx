import React, {Fragment} from 'react';
import { Card, CardActionArea, CardHeader } from '@material-ui/core';
import { IconButton, Avatar, CardMedia } from '@material-ui/core';
import { Container, Box, Grid } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	cardMedi: {
		height: 300
	},
	root: {
		maxWidth: '100%',
		height: '100%',
		backgroundColor:theme.palette.grey.A100
	
		
	}
}));

const Cards = ({val, title,start, end}) => {
	const classes = useStyle();	

	const data = val;

	return (
		<Container component={Box} className={classes.root} pt={15}>
			<Grid container spacing={5}>
				{Object.entries(data.slice(start,end)).map(([ index, { authorImgURL, authorName, imgUrl, imgDesc } ]) => (
					<Grid item key={index} xs={12} sm={6} md={4} lg={3}>
						<Card>
							<CardActionArea>
								<CardHeader
									title={title}
									subheader="Post: 09 Feb 2021"
									avatar={<Avatar>MA</Avatar>}
									action={
										<IconButton>
											<ShoppingCartIcon />
										</IconButton>

									
									
									}
								/>
								<CardMedia component="img" className={classes.cardMedi} src={imgUrl} />
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Cards;
