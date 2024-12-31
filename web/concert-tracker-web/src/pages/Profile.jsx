import {Avatar, Box, Card, CardContent, Grid2, Typography} from '@mui/material';
import React, {useContext, useEffect, useState} from 'react';
import Context from '../Context';

function Profile() {
  const context = useContext(Context);
  const [pfp, setPfp] = useState(require('./../samplepfp.jpg'));
  const [userDetails, setUserDetails] = useState();

  //useEffect = () => {};

  /*const getUserData = async () => {
    try {
      const data = await getUserInfo(context.getUsername()).then(response => {
        setUserDetails(response);
      });
    } catch (error) {
      console.log('Failed to fetch user data: ', error);
    }
  };*/

  return (
    <>
      <Box
        sx={{
          margin: 5,
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          justifySelf: 'center',
        }}>
        <Grid2 container spacing={3}>
          <Grid2 size={12}>
            <Avatar
              src={pfp}
              sx={{
                width: 150,
                height: 150,
                display: 'flex',
                justifySelf: 'center',
              }}
            />
          </Grid2>
          <Grid2 size={12}>
            <Typography sx={{display: 'flex', justifyContent: 'center'}}>
              {context.name}
            </Typography>
          </Grid2>
          <Grid2 size={4}>
            <Card>
              <CardContent>
                <Typography>Stats</Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 size={4}>
            <Card>
              <CardContent>
                <Typography>Top Concerts</Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 size={4}>
            <Card>
              <CardContent>
                <Typography>Concert Media</Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

export default Profile;
