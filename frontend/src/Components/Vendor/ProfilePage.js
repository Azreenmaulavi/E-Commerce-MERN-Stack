// ProfilePageMui.js
import React from 'react';
import { Grid } from '@mui/material';
import ProfileHeader from './ProfileHeader';
import ProfileDetails from './ProfileDetails';

const ProfilePage = () => {
  return (
    <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
      <Grid item xs={12}>
        <ProfileHeader />
      </Grid>
      <Grid item xs={12}>
        <ProfileDetails />
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
