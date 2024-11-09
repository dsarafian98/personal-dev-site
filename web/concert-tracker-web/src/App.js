import React, {useState} from 'react';
import './App.css';
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
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Routes,
  BrowserRouter,
  useNavigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Friends from './pages/Friends';

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pages = ['Home', 'Search', 'Friends'];
  const settings = ['My Profile', 'Settings', 'Stats', 'Logout'];

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

  return (
    <>
      <Navbar />
      {/* <App /> */}
      <div className="centerChildren">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
