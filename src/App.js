import React from 'react';
import { CssBaseline } from "@material-ui/core";
import NavBar from './NavBar';
import Theme from './Theme';
import Profile from './Profile';
import SignIn from './SignIn';

function App() {
  return (
    <>
      <Theme>
        {/* <CssBaseline />
        <NavBar />
        <Profile/> */}
        <SignIn />
      </Theme>

    </>
  );
}

export default App;
