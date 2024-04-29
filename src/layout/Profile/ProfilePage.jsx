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
let object;
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
  const [oldPassword, setOldPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [formData, setFormData] = useState({ ...profileData }); // Initialize formData with profileData
  const { token, setToken } = useContext(AuthContext);

  const [isDataChanged, setIsDataChanged] = useState(false); // State to track if data has been changed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = sessionStorage.getItem("authToken");
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const response = await axios.get(
          "http://192.168.1.213:8080/my/",
          config
        );
        const data = response.data.data;
        object = {
          Phone: data.Phone,
          email: data.email,
          id: data.email,
          name: data.name,
          role_id: data.role_id,
          surname: data.surname,
          username: data.username,
        };
        setPhonenumber(data.Phone);
        setEmail(data.email);
        setName(data.name);
        setSurname(data.surname);
        setUsername(data.username);
        setFormData(object);
        console.log(formData);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (
      phonenumber !== object?.Phone ||
      oldPassword !== "" ||
      newPassword !== "" ||
      confirmPassword !== "" ||
      name !== object?.name ||
      surname !== object?.surname ||
      username !== object?.username ||
      email !== object?.email
    ) {
      setIsDataChanged(true);
    } else {
      setIsDataChanged(false);
    }
  }, [
    phonenumber,
    oldPassword,
    newPassword,
    confirmPassword,
    name,
    surname,
    username,
    email,
  ]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phonenumber") {
      setPhonenumber(value);
    } else if (name === "oldPassword") {
      setOldPassword(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "surname") {
      setSurname(value);
    } else if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    const accessToken = sessionStorage.getItem("authToken");
    const body = {
      name: name,
      surname: surname,
      username: username,
      password: newPassword,
      old_password: oldPassword,
    };  
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await axios.put(
      "http://192.168.1.213:8080/my/",
      body,config,
      
    );
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
                  value={formData.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Surname"
                  name="surname"
                  onChange={handleChange}
                  value={formData.surname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phonenumber"
                  onChange={handleChange}
                  value={formData.phonenumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Old Password"
                  name="oldPassword"
                  type="password"
                  onChange={handleChange}
                  value={formData.oldPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="New Password"
                  name="newPassword"
                  type="password"
                  onChange={handleChange}
                  value={formData.newPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: "20px" }}
              disabled={!isDataChanged}
              // Disable button if no changes or if phoneNumber, oldPassword, newPassword, or confirmPassword have no values
            >
              Save Changes
            </Button>
          </form>
        </div>
      </Container>
      <Footer bottom={"0"} />
    </>
  );
}
