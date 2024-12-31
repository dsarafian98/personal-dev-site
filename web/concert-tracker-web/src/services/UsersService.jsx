import axios from 'axios';
import {Context} from '../Context';
import {useCallback, useContext, useEffect, useState} from 'react';

const context = useContext(Context);
const [base, setBase] = useState('');

// useCallback(async () => {
//   const host = await context.getHost();
// }, [base]);

useEffect(() => {
  // declare the data fetching function
  const fetchData = async () => {
    await NetworkInfo.getIPAddress().then(i => {
      setBase(i + ':3000');
    });
  };

  // call the function
  fetchData()
    // make sure to catch any error
    .catch(console.error);
}, []);

const apiClient = axios.create({
  baseURL: base,
  timeout: 1000,
  proxy: false,
});

const getUser = async () => {
  try {
    // Simulate an API call
    const response = await apiClient
      .get('/getUser', {
        id: '66cb7f1fc9fa7aeb07bb9e78',
      })
      .then(() => {
        console.log('i did it!');
      });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export {getAllUsersConcerts};
