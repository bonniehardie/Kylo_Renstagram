import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({

  palette: {
    primary: {
      main: '#c9c1c1',
      secondary: '#0a0000'
    },
    secondary: {
      main: '#6e3434',
    },
    type: 'dark'
  },
});

const Theme = props => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default Theme;
