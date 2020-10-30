import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import MyCard from './MyCard';
import { usePhotos } from './hooks/photos';
// import { useComments } from './hooks/comments';


const Home = () => {
  const photos = usePhotos(1);
  // const comments = useComments();
  return (
    <Grid
      container
      spacing={10}
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <Grid item>
        <Typography variant="h4" color="primary">Photos</Typography>
        {photos.map((photo) => (
          <MyCard
            key={photo.id}
            title={photo.id}
            subheader={photo.caption}
            image ={photo.photoUrl}
          >
            <p>{photo.photoUrl}</p>
          </MyCard>
        ))}
      </Grid>
    </Grid>
  );
}

export default Home;
