import React from "react";
// import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
//  Tabs, Tab
const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography>LiveStyle</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
