import React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { NavLink } from "react-router-dom";
import { fontFamily, fontStyle } from "@mui/system";

const Nav = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#673ab7" }}>
          <Toolbar>
            <Button to="/home" color="inherit" component={NavLink}>
              Home
            </Button>

            <Button
              color="inherit"
              to="/finance"
              component={NavLink}
              style={{ marginRight: "auto" }}
            >
              Finance
            </Button>
            <Button color="inherit" component={NavLink} to="/login">
              Login
            </Button>
            <Button color="inherit" component={NavLink} to="/register">
              Register
            </Button>
            <Button to="/logout" component={NavLink} color="inherit">
              Logout
            </Button>
            <IconButton aria-label="cart" component={NavLink} to="/cart">
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;
