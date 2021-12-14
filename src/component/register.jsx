import React, { Component } from "react";
import {
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Button,
  Typography,
} from "@mui/material";
class Register extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h5"
          style={{
            marginBottom: "20px",
            color: "white",
            backgroundColor: "#673ab7",
            padding: "10px",
            fontFamily: "Sans-Serif",
          }}
        >
          Registration Form
        </Typography>
        <Paper elevation={3}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            padding={2}
            style={{ backgroundColor: "#d1c4e9" }}
          >
            <TextField
              id="filled-basic"
              label="First Name"
              variant="filled"
              type="text"
              style={{ marginBottom: 10 }}
              fullWidth
            />
            <TextField
              id="filled-basic"
              label="Last Name"
              variant="filled"
              type="text"
              style={{ marginBottom: 10 }}
              fullWidth
            />
            <TextField
              id="filled-basic"
              label="Phone Number"
              variant="filled"
              type="Number"
              style={{ marginBottom: 10 }}
              fullWidth
            />
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              type="email"
              style={{ marginBottom: 10 }}
              fullWidth
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
              fullWidth
              style={{ marginBottom: 10 }}
            />
            <FormControl variant="filled" fullWidth>
              <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="customer">Admin</MenuItem>
                <MenuItem value="student">Doctor</MenuItem>
                <MenuItem value="admin">Patient</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              fullWidth
              style={{
                marginTop: "10px",
                backgroundColor: "#673ab7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
              }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </div>
    );
  }
}

export default Register;
