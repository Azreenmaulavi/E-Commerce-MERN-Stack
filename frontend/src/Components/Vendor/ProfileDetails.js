
// ProfileDetailsMui.js
import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const ProfileDetails = () => {
  // Example user data
  const user = {
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
      <TextField label="Email" defaultValue={user.email} margin="normal" />
      <TextField label="Phone" defaultValue={user.phone} margin="normal" />
      <TextField label="Address" defaultValue={user.address} margin="normal" />
      <Button variant="contained" color="primary" type="submit" sx={{ maxWidth: '200px', alignSelf: 'flex-start', marginTop: 2 }}>
        Save
      </Button>
    </Box>
  );
};

export default ProfileDetails;
