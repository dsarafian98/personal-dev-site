import {createTheme} from '@mui/material/styles';

const themeOptions = createTheme({
  typography: {
    h1: {
      fontFamily: "'Karla', serif",
    },
    h2: {
      fontFamily: "'Karla', serif",
    },
    h3: {
      fontFamily: "'Karla', serif",
    },
    fontFamily: "'Inconsolata', serif",
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#a6b3a5',
    },
    secondary: {
      main: '#b56357',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    background: {
      default: '#eae3ea',
    },
    info: {
      main: '#b4d8c0',
    },
  },
});

export default themeOptions;
