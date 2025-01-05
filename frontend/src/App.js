import React from 'react';
import './App.css';
import {Box} from '@mui/material';
import Context from './Context';
import Navbar from './components/Navbar';
import {ThemeProvider} from '@mui/material/styles';
import themeOptions from './theme';

function App() {
  const context = {
    name: 'dani',
    userId: '',
    drawerWidth: 240,
  };

  return (
    <>
      <Context.Provider value={context}>
        <ThemeProvider theme={themeOptions}>
          <Navbar />
          {/* <App /> */}
          <Box className="centerChildren"></Box>
        </ThemeProvider>
      </Context.Provider>
    </>
  );
}
export default App;
