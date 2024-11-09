import React, {useState} from 'react';
import {
  Container,
  Toolbar,
  Typography,
  Box,
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Routes,
  BrowserRouter,
  useNavigate,
  Link,
} from 'react-router-dom';
import Home from '../pages/Home';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pages = ['Home', 'Search', 'Friends'];
  const settings = ['My Profile', 'Settings', 'Stats', 'Logout'];
  const navigate = useNavigate();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenuNav = () => {};

  const handleNavigation = goToPage => {
    let lowercase = goToPage.toLowerCase();
    navigate('/' + lowercase);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MusicNoteOutlinedIcon
              sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: {xs: 'none', md: 'flex'},
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              Concert Tracker
            </Typography>

            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
              {pages.map(page => (
                <Button
                  key={page}
                  onClick={() => {
                    handleNavigation(page);
                  }}
                  sx={{my: 2, color: 'white', display: 'block'}}>
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{flexGrow: 0}}>
              <IconButton>
                <AddCircleOutlineOutlinedIcon
                  sx={{
                    display: {xs: 'none', md: 'flex'},
                    mr: 1,
                    color: 'white',
                  }}
                />
              </IconButton>
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar />
              </IconButton>
              <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {settings.map(setting => (
                  <MenuItem key={setting} onClick={handleUserMenuNav}>
                    <Typography sx={{textAlign: 'center'}}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
