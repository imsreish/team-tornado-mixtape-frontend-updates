import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  // palette: {
  //   type: 'dark',
  //   primary: {
  //     main: '#62BCB3',
  //     contrastText: '#ececeb',
  //     dark: '#62BCB3',
  //   },
  //   secondary: {
  //     main: '#FC9545',
  //     contrastText: '#ececeb',
  //   },
  //   background: {
  //     default: '#373433',
  //     paper: '#55504E',
  //   },
  //   error: {
  //     main: '#F21B18',
  //     dark: '#F21B18',
  //     contrastText: '#ececeb',
  //   },
  //   text: {
  //     primary: '#ececeb',
  //     secondary: '#ececeb',
  //     disabled: '#4D636D',
  //     hint: '#8F4F6A',
  //   },
  //   warning: {
  //     main: '#E165B2',
  //     contrastText: '#ececeb',
  //   },
  //   info: {
  //     main: '#707AFF',
  //     contrastText: '#ececeb',
  //   },
  //   success: {
  //     main: 'rgb(51, 214, 200)',
  //     dark: 'rgb(51, 214, 200)',
  //     contrastText: '#ececeb',
  //   },
  //   divider: '#ececeb',
  // },
  // typography: {
  //   fontFamily: 'Poppins',
  //   h1: {
  //     fontWeight: 600,
  //   },
  //   h2: {
  //     fontWeight: 600,
  //   },
  //   h3: {
  //     fontWeight: 600,
  //   },
  //   h4: {
  //     fontWeight: 600,
  //   },
  //   h5: {
  //     fontWeight: 600,
  //   },
  //   landing: {
  //     fontWeight: 600,
  //     fontFamily: 'Permanent Marker',
  //     fontSize: '12rem',
  //   },
  //   subtitle1: {
  //     fontWeight: 600,
  //   },
  //   subtitle2: {
  //     fontWeight: 500,
  //     fontFamily: 'Permanent Marker',
  //   },
  //   eachmix: {
  //     fontWeight: 500,
  //     fontFamily: 'Permanent Marker',
  //     fontSize: '2rem',
  //   },
  //   fontWeightRegular: 600,
  //   fontWeightLight: 400,
  //   button: {
  //     fontWeight: 600,
  //   },
  //   body2: {
  //     fontWeight: 500,
  //   },
  // },
  // shape: {
  //   borderRadius: 8,
  // },
  palette: {
    type: 'dark',
    primary: {
      main: '#62BCB3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f9b824',
      contrastText: '#ffffff',
    },
    background: {
      default: '#373433',
      paper: '#55504E',
    },
    error: {
      main: '#a21e21',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#ececeb',
      secondary: '#ececeb',
      disabled: '#4D636D',
      hint: '#8F4F6A',
    },
    warning: {
      main: '#E165B2',
      contrastText: '#ffffff',
    },
    info: {
      main: '#435e93',
      contrastText: '#ffffff',
    },
    success: {
      main: 'rgb(51, 214, 200)',
      dark: 'rgb(51, 214, 200)',
      contrastText: '#ffffff',
    },
    divider: '#ececeb',
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    landing: {
      fontWeight: 600,
      fontFamily: 'Permanent Marker',
      fontSize: '5.2rem',
    },
    subtitle1: {
      fontWeight: 600,
    },
    eachmix: {
      fontWeight: 500,
      fontFamily: 'Permanent Marker',
      fontSize: '1.5rem',
    },
    fontWeightRegular: 600,
    fontWeightLight: 400,
    button: {
      fontWeight: 600,
    },
    body2: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
