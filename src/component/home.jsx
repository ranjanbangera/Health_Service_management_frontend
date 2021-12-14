import React, { Component } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
class Home extends React.Component {
  // state = {
  //   count: 0,
  // };
  // increment = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  // decrement = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };
  render() {
    return (
      <div
        style={{
          margin: "auto",
          width: "60%",
          border: "3px solid white",
          marginTop: "18%",
          padding: "10px",
        }}
      >
        <h1
          style={{
            color: "rgb(103 58 183)",
            backgroundColor: "rgb(255 252 253)",
            opacity: "0.75",
          }}
        >
          Health Service Management
        </h1>

        {/* <IconButton aria-label="decrement" onClick={this.decrement}>
          <RemoveCircleIcon />
        </IconButton>
        {this.state.count}
        <IconButton aria-label="increment" onClick={this.increment}>
          <AddCircleIcon />
        </IconButton> */}

        <Button
          variant="contained"
          component={NavLink}
          to="/register"
          style={{
            marginTop: "10px",
            width: "50%",
            backgroundColor: "#673ab7",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
        >
          Register
        </Button>
      </div>
    );
  }
}

export default Home;
