import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Square from './Square';
import { usePhotos } from './hooks/photos';
import { makeStyles } from '@material-ui/core/styles';


export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

const useStyles = makeStyles(theme => ({

  paper: {
    height: '100px',
    width: '100px',
  },
}));

const Profile = () => {
  const photos = usePhotos(1);

  return (
    <Grid container >
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {photos.map((photo) => (
            <Grid key={photo.id} item>
              <Square image={photo.photoUrl} className={classes.square} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Square className={classes.control}>
        </Square>
      </Grid>
    </Grid>
  );
}

export default Profile;
