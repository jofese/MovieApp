import React from 'react';
import {Box, Card, CardMedia, CardContent, Container, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  card:{
      width:300,
      margin: '1rem'
  },
  media: {
    height: 350
  },
});

const MovieList = ({movieList}) =>{
    const classes = useStyles();

    return (
        <Box m={2}>
            <Container fluid="true">
                <Grid container spacing={3} justify="center" >
                    {
                        movieList.map( (movie,key) => {
                            return <Card key={key} className={classes.card}>
                                        <CardMedia
                                            className={classes.media}
                                            image={movie.Poster}
                                            title={movie.Title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="h4">
                                                {movie.Title} ({movie.Year}) 
                                            </Typography>
                                            
                                        </CardContent>
                                        
                                    </Card>
                        })
                    }             
                </Grid>


            </Container>
        </Box>
    );
}
export default MovieList;