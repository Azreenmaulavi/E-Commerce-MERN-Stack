
import React,{useState,useEffect} from 'react';
import { Typography, Box } from '@mui/material';

const ProfileHeader = () => {
    const [vendor, setVendor] = useState("");

    useEffect(() => {
      const fetchVendor = async () => {
        const user=JSON.parse(localStorage.getItem("user"));
        const userId=user.id;
        try {
          const response = await fetch(`http://localhost:5000/getuser/${userId}`); 
          if (!response.ok) {
            throw new Error('Failed to fetch vendor details');
          }
          const data = await response.json();
          setVendor(data);
        } catch (error) {
          console.error(error.message);
          
        }
      };
  
      fetchVendor();
    }, []);
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* <Avatar src={vendor.avatar} alt={vendor.name} sx={{ width: 100, height: 100, marginRight: 2 }} /> */}
      <div>
        <Typography variant="h4">{vendor.name}</Typography>
        <Typography variant="body1">{vendor.businessOverview}</Typography>
      </div>
    </Box>
  );
};

export default ProfileHeader;
