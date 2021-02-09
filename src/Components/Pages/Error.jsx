import React from 'react'
import { makeStyles, Container, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({

	root: {
		maxWidth: '100%',
		height: '100%'
	}
}));

const Error = () => {
    const classes = useStyle();	
    return (
        <Container component={Box} className={classes.root} mt={20}>
        <Typography variant="h3" align="center">
            Page Not Found!
        </Typography>

            
        </Container>
    )
}

export default Error
