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
import Context from './Context';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pages = ['Home', 'About', 'Experience', 'Projects'];
  const context = {
    name: 'dani',
    userId: '',
    drawerWidth: 240,
  };

  return (
    <>
      <Context.Provider value={context}>
        <Navbar />
        {/* <App /> */}
        <Box className="centerChildren"></Box>
      </Context.Provider>
    </>
  );
}
export default App;
