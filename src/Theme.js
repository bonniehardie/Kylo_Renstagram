import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  fontFamily: 'Noto Sans',
  palette: {
    type: 'dark'
  },
  typography: {
    fontFamily: 'Roboto Condensed'
  }
});

const Theme = props => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default Theme;
