import React from 'react';
import {Box, AppBar, Button, Drawer} from '@mui/material';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from './../pages/Home';
import About from './../pages/About';
import Experience from './../pages/Experience';
import Projects from './../pages/Projects';

function Navbar() {
  const pages = ['Home', 'About', 'Experience', 'Education', 'Projects'];
  const navigate = useNavigate();

  const handleNavigation = goToPage => {
    console.log('navigation clicked');
    let lowercase = goToPage.toLowerCase();
    navigate('/' + lowercase);
  };

  const drawerWidth = 240;

  return (
    <>
      <Box sx={{display: 'flex'}}>
        <AppBar
          position="fixed"
          sx={{
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            ml: {sm: `${drawerWidth}px`},
          }}></AppBar>
        <Box
          component="nav"
          sx={{
            width: {sm: drawerWidth},
            flexShrink: {sm: 0},
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Drawer
            variant="permanent"
            sx={{
              display: {xs: 'none', sm: 'block'},
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                justifyContent: 'center',
              },
            }}
            open>
            <Box sx={{alignSelf: 'center'}}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => {
                    handleNavigation(page);
                  }}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: drawerWidth,
                  }}>
                  {page}
                </Button>
              ))}
            </Box>
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: {sm: `calc(100% - ${drawerWidth}px)`},
          }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </Box>
      </Box>
    </>
  );
}
export default Navbar;
