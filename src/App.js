import React from 'react';
import { CssBaseline } from "@material-ui/core";
import NavBar from './NavBar';
import Theme from './Theme';
import Profile from './Profile';

function App() {
  return (
    <>
      <Theme>
        <CssBaseline />
        <NavBar />
        <Profile/>
      </Theme>
    </>
  );
}

export default App;
