import {Box, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';

function Search() {
  //useEffect = () => {};

  /*const getUserData = async () => {
    try {
      const data = await getUserInfo(context.getUsername()).then(response => {
        setDetails(response);
      });
    } catch (error) {
      console.log('Failed to fetch user data: ', error);
    }
  };*/

  return (
    <>
      <Box>
        <Typography>Search for a concert</Typography>
      </Box>
    </>
  );
}

export default Search;
