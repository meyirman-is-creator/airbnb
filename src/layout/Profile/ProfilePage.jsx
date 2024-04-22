import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Breadcrumbs,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import PersonalHeader from "./PersonalHeader";
import Footer from "./Footer";
import { Link } from "@mui/material";
import AuthContext from "../../contexts/AuthContext";

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: "",
    username: "",
    email: "",
    surname: "",
    phonenumber: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = sessionStorage.getItem("authToken");
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const response = await axios.get("http://192.168.1.213:8080/my/", config);
        const data = response.data.data;
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <PersonalHeader />
      <Container>
        <div style={{ padding: "16px" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link component={RouterLink} to="/">
              Home
            </Link>
            <Link component={RouterLink} to="/personal">
              Personal
            </Link>
            <Typography>Profile</Typography>
          </Breadcrumbs>
          <h1>Profile</h1>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  onChange={handleChange}
                  value={profileData.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  onChange={handleChange}
                  value={profileData.username}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  value={profileData.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Surname"
                  name="surname"
                  onChange={handleChange}
                  value={profileData.surname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phonenumber"
                  onChange={handleChange}
                  value={profileData.phonenumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Old Password"
                  name="oldPassword"
                  type="password"
                  onChange={handleChange}
                  value={profileData.oldPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="New Password"
                  name="newPassword"
                  type="password"
                  onChange={handleChange}
                  value={profileData.newPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
                  value={profileData.confirmPassword}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" sx={{marginTop:'20px'}}>
              Save Changes
            </Button>
          </form>
        </div>
      </Container>
      <Footer bottom={"0"} />
    </>
  );
}
// let object = {
//   Phone: null,
//   email: "maskeugalievd@gmail.com",
//   id: 0,
//   name: "Dauren",
//   roleId: 0,
//   surname: "Maskeugaliyev",
//   username: "senitapqan",
// };
